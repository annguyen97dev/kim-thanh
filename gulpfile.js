'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const npmDist = require('gulp-npm-dist');
const sourcemaps = require('gulp-sourcemaps');
const fileinclude = require('gulp-file-include');
const plumber = require('gulp-plumber');

//Build HTML task

const buildHTMLTask = () => {
  return gulp
    .src('src/layout/**/*.html')
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
        ignore: ['src/layout/modules'],
      })
    )
    .pipe(plumber())
    .pipe(gulp.dest('./src/template'))
    .pipe(browserSync.reload({ stream: true }));
};

//SASS task

const compileSass = () => {
  return gulp
    .src(['src/scss/*.scss'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
};

//Minify CSS

const compileSassMinify = () => {
  return gulp
    .src(['src/scss/*.scss'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
};

const copyJs = () => {
  return gulp.src('./src/js/**/*.js').pipe(gulp.dest('dist/js'));
};

const copyAssets = () => {
  return gulp.src('./src/assets/**/*').pipe(gulp.dest('dist/assets'));
};

//Watch files

const watchFiles = () => {
  gulp.watch(
    ['src/scss/*.scss'],
    gulp.parallel(compileSass, compileSassMinify)
  );

  gulp.watch('src/layout/**/*.html', buildHTMLTask);
  //gulp.watch('template/**/*.html', browserSync.reload);
  gulp.watch('components/**/*.html', browserSync.reload);
  gulp.watch('collections/**/*.html', browserSync.reload);
  gulp.watch('src/js/*.js', browserSync.reload);
};

//Browser Sync
const browserSyncReload = () => {
  browserSync.init({
    server: {
      baseDir: './src',
    },

    //  proxy: 'localhost:8888/quanlybanhang/template',
    //  port:3006
  });
};

// Copy dependencies to lib/

const copyLib = () => {
  return gulp
    .src(npmDist(), { base: './node_modules/' })
    .pipe(plumber())
    .pipe(
      rename(function (path) {
        path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '');
      })
    )
    .pipe(gulp.dest('lib'));
};

//const build = gulp.series()
const watch = gulp.parallel(watchFiles, browserSyncReload);

//exports.build = build;
exports.watch = watch;
exports.default = watch;

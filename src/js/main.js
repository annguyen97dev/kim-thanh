$(document).ready(function () {
  $('html').on('click', '.have-menu-child', function () {
    let data = $(this).attr('data-menu');
    $('html')
      .find('.menu-child#' + data)
      .fadeToggle('fast');
  });

  $('.dropdown-item').each(function () {
    if ($(this).hasClass('have-menu-child')) {
      $(this).find('span').append('<i class="fas fa-angle-down"></i>');
    }
  });

  $('.navbar-expand-lg .navbar-nav .nav-link.dropdown').click(function () {
    var get_data = $(this).attr('data-sub');
    $('.dropdown-menu').hide();
    $('html')
      .find('.dropdown-menu#' + get_data)
      .show();
    // if (get_data == 'sub-2') $('.wrap-bottom').css('height', '98px');
    // else $('.wrap-bottom').css('height', '79px');
  });

  $('html').on('click', '.navbar .nav-item', function () {
    $('.navbar .nav-item').removeClass('active');
    $(this).addClass('active');
  });

  var height_src = $(window).height();
  var height_wrapper = height_src - 55 ;
  $('.wrapper').css('height', height_wrapper);

  $(window).resize(function () {
    var height_src = $(window).height();
    var height_wrapper = height_src - 55;
    $('.wrapper').css('height', height_wrapper);
  });

  

  // upload images
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#imagePreview').css(
          'background-image',
          'url(' + e.target.result + ')'
        );
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  $('#imageUpload').change(function () {
    readURL(this);
  });

  /* date picker */
  $(function () {
    $(
      '#chooseDate_To,#chooseDate_Form, #choose-day-them-kh, #chon-ngay-sinh, #tinh-lai-no'
    ).datetimepicker({
      timepicker: true,
    });
    $('.choose-date').datetimepicker({
      timepicker: true,
    });
  });

  /* Calculator height wrap table */


  function CalcHeightWindow() {
    let h_window = $('body').height();
    let w_window = $('body').width();
  
    let lenght_note_color = $(".note-color").length;
  
    if(lenght_note_color > 0) {
      $('.wrap-height-table').css('height', h_window - 280);
    } else {
      $('.wrap-height-table').css('height', h_window - 240);
    }
    
    $('.wrap-height-table-cn').css('height', h_window - 270);
    $('.wrap-height-table-quy').css('height', h_window - 420);
    
    if (w_window < 1600) {
      $('.wrap-height-table-2').css('height', h_window - 350);
      $('.wrap-height-table-double').css('height', h_window - 320);
    } else {
      $('.wrap-height-table-2').css('height', h_window - 700);
      $('.wrap-height-table-double').css('height', h_window - 720);
    }
  
    $(window).resize(function () {
      let h_window = $('body').height();
      let w_window = $('body').width();
      let lenght_note_color = $(".note-color").length;
  
      if(lenght_note_color > 0) {
        $('.wrap-height-table').css('height', h_window - 280);
      } else {
        $('.wrap-height-table').css('height', h_window - 240);
      }
      
      $('.wrap-height-table-cn').css('height', h_window - 270);
      $('.wrap-height-table-quy').css('height', h_window - 420);
      
      if (w_window < 1600) {
        $('.wrap-height-table-2').css('height', h_window - 350);
        $('.wrap-height-table-double').css('height', h_window - 320);
      } else {
        $('.wrap-height-table-2').css('height', h_window - 700);
        $('.wrap-height-table-double').css('height', h_window - 720);
      }
    });
  
    /* table */

  $('.table-nv').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    fixedColumns: {
      leftColumns: 3,
    },
  });

  let dtb2 = $('.table-nv-2').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    fixedColumns: {
      leftColumns: 3,
    },
  });
  $('#danh-sach-nv').on('shown.bs.modal', function () {
    dtb2.draw();
  });

  $('#table-QRcode').DataTable({
    scrollX: true,
    scrollY: '350px',
    fixedColumns: {
      leftColumns: 2,
    },
  });

  let table_kh = $('#table-khachhang').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    fixedColumns: {
      leftColumns: 3,
    },
  });

  $('#danh-sach-khach-hang').on('shown.bs.modal', function () {
    table_kh.draw();
  });

  /****/
  $('#table-don-hang, #table-khohang, #table-qlgv').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  $('#table-form-nhap-kho').DataTable({
    scrollX: true,
    scrollY: '200px',
  });

  $('#table-mat-hang-duoc-chon').DataTable({
    scrollX: true,
    scrollY: '120px',
    bInfo: false,
    paging: false,
  });

  let table_timkiemMH = $('#table-tim-kiem-mat-hang').DataTable({
    scrollY: '300px',
  });

  $('#tim-kiem-mat-hang').on('shown.bs.modal', function () {
    table_timkiemMH.draw();
  });

  $('#table-nganhang, #table-tiente').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  /* Load table trong modal */
  let table_dvt = $('#table-dvt').DataTable({
    scrollY: '350px',
  });

  let table_tdc = $('#table-them-dia-chi').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_xuat_xu = $('#table-xuat-xu').DataTable({
    scrollY: '350px',
  });

  let table_cmh_1 = $('#table-chon-mat-hang-1').DataTable({
    scrollY: '100px',
  });

  let table_cmh_2 = $('#table-chon-mat-hang-2').DataTable({
    scrollY: '100px',
  });

  let table_mh = $('#table-mat-hang').DataTable({
    scrollX:true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_dskm = $('#table-danh-sach-km').DataTable({
    // scrollY: '300px',
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_ctp = $('#table-chi-tiet-phieu').DataTable({
    // scrollY: '300px',
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    // bInfo: false,
    // paging: false,
  });

  let table_hmtl = $('#table-hang-mua-tra-lai').DataTable({
    // scrollY: '300px',
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    // bInfo: false,
    // paging: false,
  });

  let table_hmtl_2 = $('#table-hang-mua-tra-lai-2').DataTable({
    // scrollY: '300px',
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_spn = $('#table-so-phieu-nhap').DataTable({
    // scrollY: '300px',
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_spn_2 = $('#table-so-phieu-nhap-2').DataTable({
    // scrollY: '300px',
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_dsnh = $('#table-ds-nhom-hang').DataTable({
    // scrollY: '300px',
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_smh = $('#table-sua-mat-hang').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_PNK = $('#table-PNK').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_CTPN = $('#table-CTPN').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_chucnang = $('.table-chuc-nang').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    scrollCollapse: true,
  });

  let table_ds_ptt = $('#table-ds-phieu-thanh-toan').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    scrollCollapse: true,
  });

  let table_ds_pctt = $('#table-ds-phieu-chua-thanh-toan').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    scrollCollapse: true,
  });

  let table_user_cham_soc = $('#table-them-user-cham-soc').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_nhom_nv = $('#table-nhom-nv').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_xuat = $('#table-xuat').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_xuat_tra = $('#table-xuat-tra').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_thu = $('#table-thu').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_nhap = $('#table-nhap').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_nhap_tra = $('#table-nhap-tra').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_chi = $('#table-chi').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  $('.table-tinh-gia-ban').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_km_1 = $('#table-km-1').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_km_2 = $('#table-km-2').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_kh_small = $('#table-kh-small').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_kh_small_2 = $('#table-kh-small-2').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_ncc_small = $('#table-ncc-small').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_ncc_small_2 = $('#table-ncc-small-2').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_nv_small = $('#table-nv-small').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_nv_small_2 = $('#table-nv-small-2').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_cnpt_1 = $('#table-cnpt-1').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_cnpt_2 = $('#table-cnpt-2').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_nhom_kh = $('#table-danh-muc-nhom-kh').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_tim_kiem_kh = $('#table-tim-kiem-khach-hang').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_cn_chitiet = $('#table_cn_chitiet').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_cn_quahan = $('#table_cn_quahan').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_ds_phieu_ck = $('#table_ds_phieu_ck').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_ds_phieubanhang = $('#table-ds-phieubanhang').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_khtt = $('#table-khtt').DataTable({
    scrollResize: true,
    scrollX: true,
    scrollY: 100,
    scrollCollapse: true,
    fixedColumns: {
      leftColumns: 3,
    },
  });

  let table_tonghopquy = $('#table-tonghopquy').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_so_du_quy = $('#table-so-du-quy').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
    searching: false,
  });

  let table_snh = $('#table-snh').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
    searching: false,
  });

  let table_so_du_ngan_hang = $('#table-so-du-ngan-hang').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
    searching: false,
  });

  let table_phieu_chi = $('#table_phieu_chi').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_phieu_thu = $('#table_phieu_thu').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_lydo = $('#table-lydo').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_import_phai_thu = $("#table-import-phai-thu").DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_import_phai_tra = $("#table-import-phai-tra").DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_vt_mathang = $("#table-vt-mat-hang").DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

 let table_phieu_ghi_chu = $("#table-phieu-ghi-chu").DataTable({
  scrollX: true,
  scrollResize: true,
  scrollY: 100,
  scrollCollapse: true,
});

  function filterGlobal () {
    $('#table-them-ghi-chu').DataTable().search(
        $('#global_filter').val(),
    ).draw();
    $('#table-search-mahang').DataTable().search(
      $('#global_filter').val(),
  ).draw();
}

let table_them_ghi_chu = $("#table-them-ghi-chu").DataTable({
  scrollResize: true,
  scrollY: 100,
  scrollCollapse: true,
});

let table_search_mahang = $("#table-search-mahang").DataTable({
  scrollResize: true,
  scrollY: 100,
  scrollCollapse: true,
});

$('input.global_filter').on( 'keyup click', function () {
  filterGlobal();
} );

$("html").on("click",".click-to-show-table", function() {
  $(".table-search").show();
  table_them_ghi_chu.draw();
  table_search_mahang.draw();
});

$("html").on("click", ".btn-choose-mh, .btn-out-table-search", function() {
  $(".table-search").hide();
});

  $('.modal').on('shown.bs.modal', function () {
    table_dvt.draw();
    table_xuat_xu.draw();
    table_cmh_1.draw();
    table_cmh_2.draw();
    table_tdc.draw();
    table_dskm.draw();
    table_ctp.draw();
    table_mh.draw();
    table_dsnh.draw();
    table_smh.draw();
    table_PNK.draw();
    table_CTPN.draw();
    table_chucnang.draw();
    table_ds_ptt.draw();
    table_ds_pctt.draw();
    table_user_cham_soc.draw();
    table_nhom_nv.draw();
    table_hmtl.draw();
    table_hmtl_2.draw();
    table_xuat.draw();
    table_xuat_tra.draw();
    table_thu.draw();
    table_nhap.draw();
    table_nhap_tra.draw();
    table_chi.draw();
    table_spn.draw();
    table_spn_2.draw();
    table_kh_small.draw();
    table_kh_small_2.draw();
    table_ncc_small.draw();
    table_ncc_small_2.draw();
    table_nhom_kh.draw();
    table_nv_small.draw();
    table_nv_small_2.draw();
    table_cnpt_1.draw();
    table_cnpt_2.draw();
    table_tim_kiem_kh.draw();
    table_cn_chitiet.draw();
    table_cn_quahan.draw();
    table_ds_phieu_ck.draw();
    table_ds_phieubanhang.draw();
    table_tonghopquy.draw();
    table_so_du_quy.draw();
    table_snh.draw();
    table_so_du_ngan_hang.draw();
    table_lydo.draw();

    /***/
  });

  $('#table-nhom-hang-imv').DataTable({
    scrollY: '100px',
    bInfo: false,
    paging: false,
  });

  $('.table-nsd').DataTable({
    // scrollY: '300px',
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  $('.table-group-user').DataTable({
    scrollY: '300px',
    bInfo: false,
    paging: false,
  });

  $('.table-pq').DataTable({
    scrollY: '320px',
  });

  $('#table-chinhanh').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    fixedColumns: {
      leftColumns: 3,
    },
  });

  $('#table-don-mua-hang, #table-dieu-phoi, #table-chuyen-kho').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  $('#danh-sach-chi-nhanh').on('shown.bs.modal', function () {
    $('#table-chinhanh').DataTable().draw();
  });

  $('#nhat-ky-nguoi-dung').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  

  $('#table-them-sdtc').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  $('#table-hethang').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  $('.table-serial').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  $('#table-theodoihangton').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  $('.table-chuc-nang, .table-nv-2').css({ width: '100%' });
  $('.dataTables_scrollHeadInner,.dataTables_scrollFootInner').css({
    width: '100%',
  });

  /* Load table trong tabs bootstrap */
  let table_solanmuahang = $('#table-solanmuahang').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_chitietmuahang = $('#table-chitietmuahang').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_ls_tralaihang = $('#table-ls-tralaihang').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_congno = $('#table-congno').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_thanhtoan = $('#table-thanhtoan').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_thegiamgia = $('#table-thegiamgia').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
    bInfo: false,
    paging: false,
  });

  let table_chuyen_kho = $('#table-ck').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_dieu_phoi = $('#table-dieu-phoi-don-hang').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_don_dat_hang = $('#table-don-dat-hang').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_ds_1 = $('#table-ds-1').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_ds_2 = $('#table-ds-2').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_ds_3 = $('#table-ds-3').DataTable({
    scrollX: true,
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

  let table_taikhoan = $('#table-taikhoan').DataTable({
    scrollResize: true,
    scrollY: 100,
    scrollCollapse: true,
  });

 

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('#table-QRcode').DataTable().draw();
    table_solanmuahang.draw();
    table_chitietmuahang.draw();
    table_ls_tralaihang.draw();
    table_congno.draw();
    table_thanhtoan.draw();
    table_thegiamgia.draw();
    table_chuyen_kho.draw();
    table_dieu_phoi.draw();
    table_don_dat_hang.draw();
    table_km_2.draw();
    table_km_1.draw();
    table_ds_1.draw();
    table_ds_2.draw();
    table_ds_3.draw();
    table_taikhoan.draw();
    table_user_cham_soc .draw();
  });

  }

  CalcHeightWindow();

  /*********/
  $('html').on(
    'click',
    '#form-them-user-cham-soc, #danh-sach-dia-chi, #danh-muc-nhom-kh, #them-nhom-khach-hang, #danh-sach-nv, .modal',
    function () {
      $('#form-them-user-cham-soc').modal('hide');
      setTimeout(function () {
        $('body').addClass('modal-open');
      }, 400);
    }
  );

  /********/
});

(function (factory) {

  
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery', 'datatables.net'], function ($) {
      return factory($, window, document);
    });
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = function (root, $) {
      if (!root) {
        root = window;
      }

      if (!$ || !$.fn.dataTable) {
        $ = require('datatables.net')(root, $).$;
      }

      return factory($, root, root.document);
    };
  } else {
    // Browser
    factory(jQuery, window, document);
  }
})(function ($, window, document, undefined) {
  'use strict';
  

  var ScrollResize = function (dt) {
    var that = this;
    var table = dt.table();

    this.s = {
      dt: dt,
      host: $(table.container()).parent(),
      header: $(table.header()),
      footer: $(table.footer()),
      body: $(table.body()),
      container: $(table.container()),
      table: $(table.node()),
    };

    var host = this.s.host;
    if (host.css('position') === 'static') {
      host.css('position', 'relative');
    }

    dt.on('draw', function () {
      that._size();
    });

    this._attach();
    this._size();
  };

  ScrollResize.prototype = {
    _size: function () {
      var settings = this.s;
      var dt = settings.dt;
      var t = dt.table();
      var offsetTop = $(settings.table).offset().top;
      var availableHeight = settings.host.height();
      var scrollBody = $('div.dataTables_scrollBody', t.container());

      // Subtract the height of the header, footer and the elements
      // surrounding the table
      availableHeight -= offsetTop;
      availableHeight -=
        settings.container.height() - (offsetTop + scrollBody.height());

      $('div.dataTables_scrollBody', t.container()).css({
        maxHeight: availableHeight,
        height: availableHeight,
      });

      if (dt.fixedColumns) {
        dt.fixedColumns().relayout();
      }
    },

    _attach: function () {
      // There is no `resize` event for elements, so to trigger this effect,
      // create an empty HTML document using an <iframe> which will issue a
      // resize event inside itself when the document resizes. Since it is
      // 100% x 100% that will occur whenever the host element is resized.
      var that = this;
      var obj = $('<iframe/>')
        .css({
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: -1,
          border: 0,
        })
        .attr('frameBorder', '0')
        .attr('src', 'about:blank');

      obj[0].onload = function () {
        var body = this.contentDocument.body;
        var height = body.offsetHeight;
        var contentDoc = this.contentDocument;
        var defaultView = contentDoc.defaultView || contentDoc.parentWindow;

        defaultView.onresize = function () {
          // Three methods to get the iframe height, to keep all browsers happy
          var newHeight = body.clientHeight || body.offsetHeight;
          var docClientHeight = contentDoc.documentElement.clientHeight;

          if (!newHeight && docClientHeight) {
            newHeight = docClientHeight;
          }

          if (newHeight !== height) {
            height = newHeight;

            that._size();
          }
        };
      };

      obj.appendTo(this.s.host).attr('data', 'about:blank');
    },
  };

  $.fn.dataTable.ScrollResize = ScrollResize;
  $.fn.DataTable.ScrollResize = ScrollResize;

  // Automatic initialisation listener
  $(document).on('init.dt', function (e, settings) {
    if (e.namespace !== 'dt') {
      return;
    }

    var api = new $.fn.dataTable.Api(settings);

    if (settings.oInit.scrollResize || $.fn.dataTable.defaults.scrollResize) {
      new ScrollResize(api);
    }
  });

  // tab
  $('html').on('click', '.list-btn-tab .box-shape .tab-shape', function () {
    $('.list-btn-tab .box-shape .tab-shape').removeClass('active');

    $(this).addClass('active');
    var data_tab = $(this).attr('data-tabs');

    $('.content-tab .item').hide();
    $('html')
      .find('.content-tab .item#' + data_tab)
      .show();
    $('#table-xuat').DataTable().draw();
    $('#table-xuat-tra').DataTable().draw();
    $('#table-thu').DataTable().draw();
    $('#table-nhap').DataTable().draw();
    $('#table-nhap-tra').DataTable().draw();
    $('#table-chi').DataTable().draw();
  });

  // tab thống kê báo cáo
  $('html').on('click', '.wrap-baocao .tabs button.btn', function () {
    $('.wrap-baocao .tabs button.btn').removeClass('active');
    $(this).addClass('active');

    var data_bc = $(this).attr('data-bc');

    console.log(data_bc);

    $('.content-bc').hide();
    $('html')
      .find('.content-bc#' + data_bc)
      .show();
  });


  // Get link and active tab
  let pageURL = $(location).attr("href").split("/");
  let link = pageURL[pageURL.length-1];
  
  if(link.includes("#")) {
    link = link.substring(0,link.length - 1);
  }

  $(".navbar-nav .dropdown-menu .dropdown-item").each(function(index){
    let urlTab = $(this).attr("href");

    if(link === urlTab) {
      $(".navbar-nav .dropdown-menu .dropdown-item").removeClass("active");
      $(".navbar .nav-item").removeClass("active")
      $(this).addClass("active");
      $(this).closest("li").addClass("active");

      $(".navbar-nav .dropdown-menu").hide();
      $(this).closest("li").find(".dropdown-menu").show();
    }
  });

  $(".menu-child li a").each(function(){
    let urlTab = $(this).attr("href");

    if(link === urlTab) {
      $(".navbar-nav .dropdown-menu .dropdown-item").removeClass("active");
      $(".navbar .nav-item").removeClass("active")

      $(this).parents(".nav-item").addClass("active");
      $(this).parents(".nav-item").find(".have-menu-child").addClass("active");

      $(".navbar-nav .dropdown-menu").hide();
      $(this).parents(".nav-item").find(".dropdown-menu").show();
    }
  });

  

});

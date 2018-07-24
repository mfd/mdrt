export default class Favourites {
  constructor() {
    this.siteId = 's1';
    this.ajaxSetPath = '/local/templates/madyart/includes/favourites_change.php';
    this.itemClass = 'item';
    this.ajaxRefreshCountPath = '/local/components/artmax/catalog.favourites.preview/ajax.php';
    this.favouritesRefrescCountContainer = document.querySelector('header .user-area__favourites__refresh-container');
    this.favouritesRefrescCountTemplateName = '.default';
    this.loginFormClass = '.b-login-form';
    this.loginForm = document.querySelector(this.loginFormClass);
    this.loginFormVisibleClass = 'isVisible';

    this.init();
  }
  init() {    
    this.favouritesButtons = document.querySelectorAll('.item__like');
    for (var i = 0; i < this.favouritesButtons.length; i++) {
      $(this.favouritesButtons[i]).on('click',$.proxy(this.setFavourite,this));
    }
  }
  setFavourite(event) {
    var target = event.target,
      item = target,
      data = {},
      _this = this;
    while(item.parentNode) {
      item = item.parentNode;
      if (item.classList.contains(_this.itemClass)) {
        data.item_id = item.getAttribute('data-item');
        break;
      }
    }
    $.ajax({
      url: _this.ajaxSetPath,
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function(result) {
        if (result.SUCCESS) {
          if (result.ITEM_FAVOURITES_STATE === 'remove') {
            target.classList.remove('active');
          }else if (result.ITEM_FAVOURITES_STATE === 'add') {
            target.classList.add('active');
          }
          _this.refreshCount();
        }else if (result.FAILURE === 'not_authorized') {
          _this.loginFormShow();
        }
      }
    });
  }
  refreshCount() {
    var data = {},
      _this = this;
    data.sessid = BX.bitrix_sessid();
    data.siteId = this.siteId;
    data.templateName = this.favouritesRefrescCountTemplateName;
    $.ajax({
      url: _this.ajaxRefreshCountPath,
      dataType: 'html',
      type: 'POST',
      data: data,
      success: function(result) {
        _this.favouritesRefrescCountContainer.innerHTML = result;
      }
    });
  }
}

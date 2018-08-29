export default class Modal {
  constructor() {
    this.view = document;
    this.windowResize = this.windowResize.bind(this);
    $(window).on('resize', this.windowResize);
    this.init();
  }
  init() {
    $(this.view).find('.js-popuplink').magnificPopup({
      type: 'ajax',
      removalDelay: 1000,
      closeBtnInside:true,
      fixedContentPos:true,
      closeMarkup :
        `<button title="%title%" type="button" class="mfp-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 29.41 29.41">
            <polygon points="29.41 1.41 28 0 14.71 13.29 1.41 0 0 1.41 13.29 14.71 0 28 1.41 29.41 14.71 16.12 28 29.41 29.41 28 16.12 14.71 29.41 1.41"/>
          </svg>
        </button>`,
      callbacks: {
        parseAjax: function(mfpResponse) {
          mfpResponse.data = $(mfpResponse.data).find('.ajaxcontent');
        },
        ajaxContentAdded: function() {
          //console.log(this.content);
          if($(window).width()>480) {
            let w = this.container.find('.modal__content .container').width();
            this.container.find('.mfp-content').width(w);
          }
        }
      }
    });
  }
  windowResize() {
    this.resizePopup();
  }

  resizePopup() {
  }

  openPopup(e) {
  }

  closePopup() {
  }

  destroy() {
  }

}


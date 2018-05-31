class Header {
  constructor(view) {
    this.body = $('body');
    this.init();
  }

  init() {
    let $body = this.body;

    $('.shareFacebook').on('click',(e) => {
      let url = $(e.currentTarget).attr('href');
      e.preventDefault();
    });

    $('.js-sign').on('click', (event) => {
      event.preventDefault();
      $body.removeClass('isLocationSwitch');
      if ($body.hasClass('isLoginform')) {
        $body.removeClass('isLoginform');
      } else {
        $body.addClass('isLoginform');
      }
    });

    $('.b-login-form--close').on('click', (event) => {
      event.preventDefault();
      $body.removeClass('isLoginform');
    });

    $('.location--change').on('click', (event) => {
      event.preventDefault();
      $body.removeClass('isLoginform');
      if ($body.hasClass('isLocationSwitch')) {
        $body.removeClass('isLocationSwitch');
      } else {
        $body.addClass('isLocationSwitch');
      }
    });


    $('.location--change label.radio').on('click', function(e) {
      e.stopPropagation();
    });

    $('.location__choose-close').on('click', (event) => {
      event.preventDefault();
      $body.removeClass('isLocationSwitch');
    });
  }

}

export default Header;

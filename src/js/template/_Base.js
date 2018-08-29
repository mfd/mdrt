import Dropdown from '../partial/Dropdown';
import Tabs from '../partial/Tabs';
import FakeSelect from '../partial/fakeSelect';

import Basket from '../partial/Basket';
import Favourites from '../partial/Favourites';
import Table from '../partial/Table';
import Modal from '../partial/Modal';
import owlCarousel from '../partial/owlCarousel';
import PriceSlider from '../partial/PriceSlider';

import Inputmask from 'inputmask';

export default class Base {
  constructor() {
    this.view = document;
    this.init();
  }

  init() {
    const self = this;

    if($('.tabs').length)
      this.tabs = new Tabs(this.view);
    if($('.order').length)
      this.basket = new Basket();

    // DROPDOWN
    if ($('.js-dropdown').length) {
      const dropdowns = this.view.querySelectorAll('.js-dropdown');
      this.dropdowns = [];
      for (let i = 0; i < dropdowns.length; i++) {
        let $el = dropdowns[i];
        this.dropdowns[i] = new Dropdown('dropdown-' + i, $el);
      }
    }

    // FAKE SELECT
    if($('[data-fake-select]').length) {
      const fakeselect = this.view.querySelectorAll('[data-fake-select]');
      this.fakeselect = [];
      for (let i = 0; i < fakeselect.length; i++) {
        let $el = fakeselect[i];
        this.fakeselect[i] = new FakeSelect('FakeSelect-' + i, $el);
      }
      // this.fakeselect = new fakeSelect(
      //   this.view.querySelector('[data-fake-select]'),
      //   //this.mobileSelectChange.bind(this),
      // ).init();
    }

    // MODALS
    if ($('.js-popuplink').length)
      this.modals = new Modal();

    // OWLGALLERY
    if($('.owl-gallery'))
      this.carousel = new owlCarousel();

    // priceSlider
    if ($('[data-module="priceSlider"]').length) {
      const priceslider = this.view.querySelectorAll('[data-module="priceSlider"]');
      this.priceslider = [];
      for (let i = 0; i < priceslider.length; i++) {
        let $el = priceslider[i];
        this.priceslider[i] = new PriceSlider('PriceSlider-' + i, $el);
      }
    }
    // tips
    if ($('[data-tippy]').length) {
      this.tips = [];
      this.view.querySelectorAll('[data-tippy]').forEach(el => {
        this.tips.push(
          tippy(el)
        );
      });
    }

    // OWLGALLERY
    if($('[data-inputmask]').length) {
      const masks = Array.from(document.querySelectorAll('[data-inputmask]'));
      masks.forEach(el => {
        let mask = el.dataset.inputmask;
        new Inputmask(mask).mask(el);
      });

    }

    // Responsive tables
    if($('.js-table')) {
      const tables = Array.from(document.querySelectorAll('.js-table'));
      tables.forEach(table => {
        new Table(table) // eslint-disable-line
      });
    }

    // добавление товара в корзину
    let addToCartButton = '.add_to_cart';
    let $addToCartButton = $(addToCartButton);
    $addToCartButton.click(function(e) {
      if (!$('.select_size:checked').val()) {
        $('#notifications').append('<div class="notification-item"><h5>Внимание!</h5><p>Выберите размер</p><a href="#" class="close_note">&#215;</a></div>');
        $('.close_note').click(function(e) {
          $('#notifications').empty();
        });
        return false;
      }
      let url = $(this).attr('href');
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'html',
        success: function() {
          BX.onCustomEvent('OnBasketChange');
          let item_name = $('.oneitem__title').text();
          let item_price = $('.oneitem__price span.js-price-value').text();
          $('#notifications').append('<div class="notification-item"><h5>Товар добавлен в корзину!</h5><p>'+item_name+' - '+item_price+'</p><a href="#" class="close_note">&#215;</a></div>');
          $('.close_note').click(function(e) {
            $('#notifications').empty();
            e.preventDefault();
          });
        },
        error: function() {
          console.error('Товар не добавлен. Ошибка сервера.');
        }
      });
      e.preventDefault();
    });

    //регистрация
    let regStepOne = '#reg-step-1';
    let regStepTwo = '#reg-step-2';
    let $regStepOne = $(regStepOne);
    let $regStepTwo = $(regStepTwo);
    $regStepOne.submit(function(e) {
      $.ajax({
        data: $regStepOne.serialize(),
        url : 'http://' + location.host + '/local/templates/madyart/includes/registration.php',
        type: 'POST',
        success: function(result) {
          let response = JSON.parse(result);
          if (response['REGISTER_MESSAGE']['TYPE'] === 'ERROR') {
            $('.error').html(response['REGISTER_MESSAGE']['MESSAGE']);
          } else {
            $regStepOne.fadeOut('fast');
            $regStepTwo.fadeIn('fast').submit(function() {
              $.ajax({
                data: $regStepTwo.serialize(),
                url: 'http://' + location.host + '/local/templates/madyart/includes/registration.php',
                type: 'POST',
                success: function() {
                  document.location = 'http://' + location.host + '/personal/';
                },
                error: function() {
                  return false;
                }
              });
            });
          }
        },
        error: function() {
          console.log('Нет регистрации. Проверить AJAX URL');
        }
      });
      e.preventDefault();
    });

    //обзор луков
    $('.get_look').click(function(e) {
      let item_id = $(this).attr('data-look');
      $.ajax({
        type: 'POST',
        url: 'http://' + location.host + '/local/templates/madyart/includes/get_look.php',
        data: {
          'arItemID': item_id
        },
        success: function(result) {
          let response = JSON.parse(result);

          $('.js-look__title').text(response['NAME']);
          $('.js-look__image').html(response['IMAGE']);

          $('.look__parts').empty();
          let itemsWearArray = response['ITEM_WEAR'];
          for (var i = itemsWearArray.length - 1; i >= 0; i--) {
            let elem = '<li class="look__parts-element"><div class="look__parts-element-pic">';
            elem += '<figure class="img-block js-item__image">' + itemsWearArray[i]['IMAGE'] + '</figure>';
            elem += '<div class="look__parts-element-title js-item__title">' + itemsWearArray[i]['NAME'];
            elem += '<p class="price js-item__price">' + itemsWearArray[i]['PRICE'] + '</p>';
            elem += '</li>';
            console.log(elem);
            $('.look__parts').append(elem);
          }
        },
        error: function(result) {
          console.log(result);
        }
      });
      e.preventDefault();
    });



    $('.item-size_value').click(function(e) {
      let add_to_basket_path = $(this).prev().val();
      $('.add_to_cart').attr('href', add_to_basket_path + '&ajax_basket=Y');
    });




    $('#go-to-step-2').click(function(e) {
      $('#js-step-1-block').hide();
      $('#js-step-2-block').fadeIn();
      $('#js-step-1').removeClass('isActive');
      $('#js-step-2').addClass('isActive');
      e.preventDefault();
    });
    $('#js-go-step-3').click(function(e) {
      if ($('input[name="shiploc"]').val()) {
        $('#js-step-2-block').hide();
        $('#js-step-3-block').fadeIn();
        $('#js-step-2').removeClass('isActive');
        $('#js-step-3').addClass('isActive');
        e.preventDefault();
      } else {
        alert('Выберите адрес доставки');
      }
    });
    $('#change_delivery_type').change(function() {
      let delivery_id = $(this).val();
      $.ajax({
        url: 'http://' + location.host + '/local/templates/madyart/includes/get_delivery_point.php',
        type: 'POST',
        data: {
          'select_delivery' : delivery_id
        },
        success: function(result) {
          $('#js-step-2-block .col2 .b-ordernow, #js-step-2-block .summary, .delivery_cost_input').remove();
          $('#js-step-2-block .col2').prepend(result);
        },
        error: function() {
          alert('Хуюшки');
        }
      });
    });
    $('#confirm-order').on('click', function(e) {
      let form = $('#ORDER_FORM').serialize();
      console.log(form);
      $.ajax({
        url: 'http://' + location.host + '/local/templates/madyart/includes/order.php',
        type: 'POST',
        data: form,
        success: function(result) {
          $('#js-step-4-block').append(result).show();
          $('#js-step-3-block').hide();
          $('#js-step-3').removeClass('isActive');
          $('#js-step-4').addClass('isActive');
        },
        error: function() {
          console.log('Хуюшки');
        }
      });
      e.preventDefault();
    });


    $('.stg__other a, .stg__prev, .stg__next').click(function() {
      let item_id = $(this).attr('data-look');

      $.ajax({
        type: 'POST',
        url: 'http://' + location.host + '/local/templates/madyart/includes/get_look.php',
        data: {
          'arItemID': item_id
        },
        success: function(result) {
          let response = JSON.parse(result);
          //console.log(response)

          $('.stg__full .img-block').html(response['IMAGE']);

          $('.stg__parts').empty();
          let itemsWearArray = response['ITEM_WEAR'];
          for (var i = itemsWearArray.length - 1; i >= 0; i--) {
            let elem = '<li class="stg__parts-element"><div class="look__parts-element-pic">';
            elem += '<figure class="img-block">' + itemsWearArray[i]['IMAGE'] + '</figure>';
            elem += '<div class="stg__parts-element-title">' + itemsWearArray[i]['NAME'];
            elem += '<p class="price">' + itemsWearArray[i]['PRICE'] + '</p>';
            elem += '</li>';
            //console.log(elem);
            $('.stg__parts').append(elem);
          }
          $('html, body').animate({ scrollTop: $('.stg__element').offset().top - 80 }, 500);
        },
        error: function(result) {
          console.log(result);
        }
      });
    });

  }
}




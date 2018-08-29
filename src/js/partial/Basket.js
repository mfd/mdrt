import BasketIncr from '../partial/BasketIncrement';

export default class Basket {
  constructor(view) {
    this.view = document;
    this.init();
  }
  init() {
    if ($('[data-module="incrementer"]').length) this.basketIncr();
    this.bonusSlider();
    console.log('init Basket', $('.add_to_cart').length);
    // $('.add_to_cart').on('click',(e) => {
    //   let url = $(e.currentTarget).attr('href');
    //   console.log(url);
    //   e.preventDefault();
    // });

  }
  basketIncr() {
    const basketincr = this.view.querySelectorAll('[data-module="incrementer"]');
    this.basketincr = [];
    for (let i = 0; i < basketincr.length; i++) {
      let $el = basketincr[i];
      this.basketincr[i] = new BasketIncr('BasketIncr-' + i, $el);
    }
  }
  bonusSlider() {
    let bonSlideEl = this.view.querySelector('#bonus-slider');
    let bonSlideUiEl = this.view.querySelector('#bonus-slider .slider-ui');
    let bonCurrEl = this.view.querySelector('#bonus-slider .bon-current');
    let bonTotalEl = this.view.querySelector('#bonus-slider .bon-total');
    let bonTotal = $(bonSlideEl).data('total');

    this.bonSlider = noUiSlider.create(bonSlideUiEl, {
      start: 500,
      step: 1,
      range: {
        'min': 0,
        'max': bonTotal
      },
      connect: 'lower'
    });
    this.bonSlider.on('update', function(val, handle) {
      let count = Math.round(val);
      let declOfNum = (number, titles) => {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
      };
      bonCurrEl.textContent = `${count} ${declOfNum(count, ['бонус', 'бонуса', 'бонусов'])}`;
      bonTotalEl.textContent = `У вас ${bonTotal} ${declOfNum(bonTotal, ['бонус', 'бонуса', 'бонусов'])}`;
    });
  }
  destroy() {

  }
}

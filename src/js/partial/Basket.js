export default class Basket {
  constructor(view) {
    this.init();
  }
  init() {
    console.log('init Basket', $('.add_to_cart').length);

    // $('.add_to_cart').on('click',(e) => {
    //   let url = $(e.currentTarget).attr('href');
    //   console.log(url);
    //   e.preventDefault();
    // });


  }
  destroy() {

  }
}

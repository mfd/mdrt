import TabsItem from './TabsItem';

class Tabs {
  constructor(view) {
    this.view = view;
    this.elements = $(this.view).find('.tabs');

    this.init();
  }
  init() {
    console.log('init tabs');
    this.Tab = [];

    //BarbaController.addCallBack(this.hide.bind(this),'before');
    var elements = this.elements;
    for(let i = 0; i < elements.length; i++) {
      this.Tab[i] = new TabsItem(elements[i]);
    }
  }
  destroy() {
    console.log('destroy tabs');
    var elements = this.elements;
    for(let i = 0; i < elements.length; i++) {
      this.Tab[i] = null;
    }
  }



}

export default Tabs;

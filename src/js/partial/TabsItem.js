export default class TabsItem {
  constructor(el) {
    this.el = el;
    this.init();
    //this.hash = document.location.hash;
  }
  init() {
    console.log('init tab', this.el);

    //BarbaController.addCallBack(this.hide.bind(this),'before');

    $(this.el).on('click', "li:not('.active') a", this.changeTab.bind(this));
    $(this.el).on('click', 'li.active a', this.toggleMobileMenu.bind(this));

    //this.pageLoadCorrectTab();
  }
  destroy() {
    $(this.el).off('click', ".tabs:not('.active') a", this.changeTab.bind(this));
    $(this.el).off('click', 'li.active a', this.toggleMobileMenu.bind(this));
  }
  hide() {
    console.log('tabs hide');
  }
  changeTab(event) {
    let hash = $(event.currentTarget).attr('href');
    var $anchor = $(this.el).find("[href='"+hash+"']");
    var $div = $(this.el).find(hash);
    console.log(this.el);

    // activate correct anchor (visually)
    $anchor.parent().addClass('active').siblings().removeClass('active');
    $anchor.addClass('active').parent().siblings().find('a').removeClass('active');

    // activate correct div (visually)
    $div.addClass('active').siblings().removeClass('active');

    // update URL, no history addition
    // You'd have this active in a real situation, but it causes issues in an <iframe> (like here on CodePen) in Firefox. So commenting out.
    // window.history.replaceState("", "", hash);

    // Close menu, in case mobile
    //$anchor.closest('ul').removeClass('open');
    $(this.el).removeClass('open');

    event.preventDefault();

  }

  // If the page has a hash on load, go to that tab
  pageLoadCorrectTab() {
    debugger;
    if (!this.hash) {
      return;
    }
    this.changeTab(this.hash);
  }

  toggleMobileMenu(event) {
    console.log('mob menu', event);
    event.preventDefault();
    //console.log('toggle mobile', el);
    //$(el).closest('ul').toggleClass('open');
    $(this.el).toggleClass('open');
  }



}



import BarbaPageBase from '../barba/BarbaPageBase';

class Page extends BarbaPageBase {

  constructor() {
    super('page');
  }

  display(container) {

    	//Banner
    const error404 = new TimelineLite({paused : true});
    error404.fromTo($('.bannerHead'), 0.5, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},0);
    error404.fromTo($('.bannerHead .vector'), 0.4, {css:{autoAlpha:0, x:'-40%', y:'-50%'}}, {css:{autoAlpha:1, x:'-50%', y:'-50%'}, ease:'Power1.easeOut'},0.8);
    error404.fromTo($('.bannerHead .drawing'), 0.4, {css:{autoAlpha:0, x:'-60%', y:'-50%'}}, {css:{autoAlpha:1, x:'-50%', y:'-50%'}, ease:'Power1.easeOut'},0.9);
    error404.fromTo($('.bannerHead .title'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},1.5);
    error404.restart();
  }

  hide(container, promise) {
    super.hide(container,promise);
  }
}

export default Page;

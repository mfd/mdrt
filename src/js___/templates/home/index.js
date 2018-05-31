const Barba = require('barba.js');

const Home = Barba.BaseView.extend({
  namespace: 'Home',

  onEnter() {
    console.info('start home');
    window.scrollTo(0,0);

    // console.info('enter 404');
    document.querySelector('[data-site-inner]').classList.add('light');

  },

  onLeaveCompleted() {
    console.info('leave 404 completed');
    // this.panels && this.panels.destroy();
    // this.fixedScroll && this.fixedScroll.destroy();
    // this.panels && this.panels.destroy();
    // this.storyCarousel && this.storyCarousel.destroy();
    // this.features && this.features.destroy();
  }
});

export default Home;

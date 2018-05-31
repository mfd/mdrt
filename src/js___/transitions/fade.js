// Dependencies
const Barba = require('barba.js');
import scroll from 'utils/scroll';

// FadeTransition Class
const Fade = Barba.BaseTransition.extend({
  start() {
    // Promises
    Promise
      .all([
        scroll.goTo(0, 0.4),
        this.fadeOut(),
        this.newContainerLoading,
      ])
      .then(this.fadeIn.bind(this));
  },


  /**
   * Fade Out: Fade out old container.
   */
  fadeOut() {
    // Promise
    const deferred = Barba.Utils.deferred();

    // Animate Old Container
    // eslint-disable-next-line
    TweenMax.to(this.oldContainer, .7, {
      autoAlpha: 0,
      onComplete: () => {
        // Resolve
        deferred.resolve();
      },
    });

    return deferred.promise;
  },


  /**
   * Fade In: Fade in new container.
   */
  fadeIn() {
    // Hide Old Container
    this.oldContainer.style.display = 'none';

    // Animate New Container
    // eslint-disable-next-line
    const tl = new TimelineMax({
      onComplete: () => {
        // Done
        this.done();
      },
    });

    // Fade Animation
    tl.fromTo(this.newContainer, 0.6,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
    );
  },
});
export default Fade;
//module.exports = Fade;

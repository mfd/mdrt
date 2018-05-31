import EventEmitter from 'eventemitter3';
import viewport from 'utils/viewport';
import { TweenLite } from 'gsap';
import deferred from 'utils/deferred';

class Scroll {
  constructor() {
    this.root = document.body;
    this.ee = new EventEmitter();
    this.onScroll = this.onScroll.bind(this);
    this.y = 0;

    this.root = document.body;
    this.bind();
    this.init();

    window.setTimeout(() => {
      this.onScroll();
    }, 200);
  }

  bind() {
    viewport.ee.on('update', this.onScroll);
  }

  init() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const y = this.getCurrent();
    this.y = y;
    this.ee.emit('update', y);
  }

  getCurrent() {
    // return this.root.scrollTop;
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  goTo(y, sec = 1) {
    let dfd = deferred();
    let obj = { y: this.getCurrent() };

    TweenLite.to(obj, sec, {
      y,
      onUpdate: () => {
        this.setTo(obj.y);
      },
      onComplete: () => {
        dfd.resolve();
      }
    });

    return dfd.promise;
  }

  setTo(y) {
    window.scrollTo(0, y);
  }
}

export default new Scroll();

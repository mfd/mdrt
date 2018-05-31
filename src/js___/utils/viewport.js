simport EventEmitter from 'eventemitter3';

class Viewport {
  constructor() {
    this.ee = new EventEmitter();
    this.bind();
    this.update();
  }

  bind() {
    this.update = this.update.bind(this);

    window.addEventListener('resize', this.update);
  }

  destroy() {
    window.removeEventListener('resize', this.update);
  }

  update() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.ratio = this.width / this.height;
    this.ee.emit('update', this.width, this.height);
  }
}

export default new Viewport();

export default class Slider {
  constructor() {
    this._slides = document.querySelectorAll(".slider__single");
    this._current = 0;
    this._btnLeft = document.querySelector(".btn-left");
    this._btnRight = document.querySelector(".btn-right");
    this._surface = document.querySelector("#slide");
    this._startX = 0;
    this._startY = 0;
    this._distX = 0;
    this._distY = 0;
    this._startTime = 0;
    this._elapsedTime = 0;
    this._threshold = 100;
    this._restraint = 150;
    this._allowedTime = 1000;
  }

  start() {
    this._slides.forEach(item => {
      item.classList.add("slider__single_hidden");
      item.classList.remove("frontLayer");
    });

    this._slides[this._current].classList.remove("slider__single_hidden");
    this._slides[this._current].classList.add("frontLayer");
  }

  _left() {
    this._current - 1 === -1
      ? (this._current = this._slides.length - 1)
      : (this._current -= 1);

    this.start();
  }

  _clickLeft() {
    this._btnLeft.addEventListener("click", () => {
      this._left();
    });
  }

  _right() {
    this._current + 1 === this._slides.length
      ? (this._current = 0)
      : (this._current += 1);

    this.start();
  }

  _clickRight() {
    this._btnRight.addEventListener("click", () => {
      this._right();
    });
  }

  _swiperStart() {
    this._surface.addEventListener("touchstart", e => {
      if (e.target.classList.contains("btn-left")) {
        this._left();
      } else if (e.target.classList.contains("btn-right")) {
        this._right();
      }

      const touchObj = e.changedTouches[0];
      this._startX = touchObj.pageX;
      this._startY = touchObj.pageY;
      this._startTime = new Date().getTime();
      e.preventDefault();
    });
  }

  _swiperMove() {
    this._surface.addEventListener("touchmove", e => {
      e.preventDefault();
    });
  }

  _swiperEnd() {
    this._surface.addEventListener("touchend", e => {
      const touchObj = e.changedTouches[0];
      this._distX = touchObj.pageX - this._startX;
      this._distY = touchObj.pageY - this._startY;
      this._elapsedTime = new Date().getTime() - this._startTime;
      if (this._elapsedTime <= this._allowedTime) {
        if (
          Math.abs(this._distX) >= this._threshold &&
          Math.abs(this._distY) <= this._restraint
        ) {
          if (this._distX > 0) {
            this._left();
          } else {
            this._right();
          }
        }
      }

      e.preventDefault();
    });
  }

  work() {
    this._clickLeft();
    this._clickRight();
    this._swiperStart();
    this._swiperMove();
    this._swiperEnd();
  }
}

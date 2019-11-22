export default class ExpressionPanel {
  constructor() {
    this.acc = document.querySelector("#toggle");
    this.blockOpen = document.querySelector('#block-open');
    this.arrow = document.querySelector("#arrow");
  }

  _open() {
    this.blockOpen.classList.remove("show");
    this.blockOpen.classList.add("none");
    this.arrow.classList.add("arrow-up");
  }

  _close() {
    this.blockOpen.classList.remove("none");
    this.blockOpen.classList.add("show");
    this.arrow.classList.remove("arrow-up");
  }

  work() {
    this.acc.addEventListener('click', () => {
      this.blockOpen.classList.contains('show') ? this._open() : this._close();
    });
  }
}

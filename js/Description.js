export default class Description {
  constructor(button, descr) {
    this._button = button;
    this._descr = descr;
    this._swipe = document.querySelector('#swipe');
    this._isShow = true;
  }

  _show(button, descr) {
    descr.classList.remove('hidden');
    descr.classList.add('show');
    button.textContent = 'Hide description';
    button.classList.add('green');
    button.classList.remove('gray');
    this._swipe.classList.add('hidden');
  }

  _hide(button, descr) {
    descr.classList.remove('show');
    descr.classList.add('hidden');
    button.textContent = 'Show description';
    button.classList.add('gray');
    button.classList.remove('green');
    this._swipe.classList.remove('hidden');
  }

  work() {
    this._button.addEventListener('click', () => {
      if (!this._isShow) {
        this._hide(this._button, this._descr);
        this._isShow = true;
      } else {
        this._show(this._button, this._descr);
        this._isShow = false;
      }
    });

    this._button.addEventListener('touchend', () => {
      if (!this._isShow) {
        this._hide(this._button, this._descr);
        this._isShow = true;
      } else {
        this._show(this._button, this._descr);
        this._isShow = false;
      }
    });
  }
}

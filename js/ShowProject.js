export default class ShowProject {
  constructor(project, projectFrame, projectSwitch, projectBack, stateProject) {
    this._startX = 0;
    this._startY = 0;
    this._endX = 0;
    this._endY = 0;
    this._project = document.querySelector(project);
    this._projectFrame = document.querySelector(projectFrame);
    this._projectSwitch = document.querySelector(projectSwitch);
    this._projectBack = document.querySelector(projectBack);
    this._page = document.querySelector('#wrapper');
    this._stateProject = stateProject;
  }

  _checkClasses() {
    this._page.classList.toggle('hidden');
    if (document.body.clientWidth > 500) {
      this._projectSwitch.classList.toggle('show');
    }
    this._projectFrame.classList.toggle('show');
    this._projectBack.classList.toggle('show');
  }

  _clickShow() {
    this._project.addEventListener('click', () => {
      this._checkClasses();
    });
  }

  _switch() {
    this._projectSwitch.addEventListener('click', () => {
      this._projectFrame.classList.toggle(this._stateProject);
      if (this._projectSwitch.textContent === 'Mobile') {
        this._projectSwitch.textContent = 'Desktop';
      } else {
        this._projectSwitch.textContent = 'Mobile';
      }
    });
  }

  _back() {
    this._projectBack.addEventListener('click', () => {
      this._checkClasses();
    });
  }

  _touchShow() {
    this._project.addEventListener('touchstart', e => {
      const touchObj = e.changedTouches[0];
      this._startX = touchObj.pageX;
      this._startY = touchObj.pageY;
    });

    this._project.addEventListener('touchend', e => {
      const touchObj = e.changedTouches[0];
      this._endX = touchObj.pageX;
      this._endY = touchObj.pageY;

      if (this._startX === this._endX && this._startY === this._endY) {
        this._checkClasses();
      }
    });
  }

  work() {
    this._clickShow();
    this._switch();
    this._back();
    this._touchShow();
  }
}

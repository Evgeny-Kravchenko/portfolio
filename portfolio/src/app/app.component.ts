import { Component } from '@angular/core';
import { slideInAnimation } from './animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  public isFooterShow: boolean;

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  public switchFooter(state): void {
    this.isFooterShow = state;
  }
}

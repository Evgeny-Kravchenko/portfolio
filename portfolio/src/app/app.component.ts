import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { slideInAnimation } from './animation';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public isFooterShow: boolean;

  constructor(
    private ref: ChangeDetectorRef,
    private spinner: NgxSpinnerService
  ) {}

  public ngOnInit(): void {
    this.isFooterShow = false;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 0);
  }

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  public switchFooter(event): void {
    if ('animation' in event.toState) {
      switch (event.phaseName) {
        case 'start':
          this.isFooterShow = false;
          break;
        case 'done':
          this.isFooterShow = true;
          break;
        default:
          return;
      }
    }
    this.ref.detectChanges();
  }
}

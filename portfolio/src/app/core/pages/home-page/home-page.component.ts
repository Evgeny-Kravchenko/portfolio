import {
  ChangeDetectionStrategy,
  Component, OnInit,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}

  public ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }
}

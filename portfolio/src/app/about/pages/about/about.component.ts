import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  public items: Array<number>;
  public showAmount: number;
  constructor(
    private ref: ChangeDetectorRef,
    private spinner: NgxSpinnerService
  ) {}

  public ngOnInit(): void {
    this.items = [this.showAmount];
    this.showAmount = 0;
    setInterval(() => {
      this.showAmount += 1;
      this.items = [this.showAmount];
      this.ref.detectChanges();
    }, 20000);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }
}

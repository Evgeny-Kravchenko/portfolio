import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  public items: Array<number>;
  public showAmount: number;

  constructor(private ref: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.items = [this.showAmount];
    this.showAmount = 0;
    setInterval(() => {
      this.showAmount += 1;
      this.items = [this.showAmount];
      this.ref.detectChanges();
    }, 20000);
  }
}

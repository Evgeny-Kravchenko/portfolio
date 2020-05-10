import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public items: Array<number>;
  public showAmount: number;

  constructor() {
  }

  ngOnInit(): void {
    this.items = [this.showAmount];
    this.showAmount = 0;
    setInterval(() => {
      this.showAmount += 1;
      this.items = [this.showAmount];
    }, 20000);
  }
}

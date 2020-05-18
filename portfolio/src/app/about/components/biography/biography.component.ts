import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BiographyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

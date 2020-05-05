import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { IWorkItem } from '../../models/item-work';

@Component({
  selector: 'app-item-work',
  templateUrl: './item-work.component.html',
  styleUrls: ['./item-work.component.scss'],
})
export class ItemWorkComponent implements OnInit {
  @Input() public work: IWorkItem;

  constructor() {}

  ngOnInit(): void {}
}

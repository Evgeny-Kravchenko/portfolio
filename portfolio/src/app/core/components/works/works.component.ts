import { Component, OnInit } from '@angular/core';
import { IWorkItem } from '../../models/item-work';
import { WorksService } from '../../services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  public works: Array<IWorkItem>;

  constructor(private worksService: WorksService) {}

  public ngOnInit(): void {
    this.works = this.worksService.getWorks();
  }
}

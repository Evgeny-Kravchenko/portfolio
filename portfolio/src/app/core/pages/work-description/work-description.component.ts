import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorksService } from '../../services/works.service';
import { IWorkItem } from '../../models/item-work';
import { Location } from '@angular/common';

@Component({
  selector: 'app-work-description',
  templateUrl: './work-description.component.html',
  styleUrls: ['./work-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkDescriptionComponent implements OnInit {
  private id: number;
  public detailedInformation: IWorkItem;
  constructor(
    private activatedRoute: ActivatedRoute,
    private worksService: WorksService,
    public location: Location
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      this.detailedInformation = this.worksService.getWorkByOrder(this.id);
    });
  }

  public ngOnInit(): void {}
}

import { Injectable } from '@angular/core';
import { IWorkItem } from '../models/item-work';
import { works } from '../../../assets/works';

@Injectable()
export class WorksService {
  private readonly works: Array<IWorkItem>;

  constructor() {
    this.works = works;
  }

  public getWorks(): Array<IWorkItem> {
    return this.works;
  }
}

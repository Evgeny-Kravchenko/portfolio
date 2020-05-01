import { Pipe, PipeTransform } from '@angular/core';
import { IWorkItem } from '../models/item-work';

@Pipe({
  name: 'worksFilter',
})
export class WorksFilterPipe implements PipeTransform {
  public transform(value: Array<IWorkItem>, ...args: string[]): unknown {
    const argFilter = args[0];
    return value.filter(item => item.type === argFilter);
  }
}

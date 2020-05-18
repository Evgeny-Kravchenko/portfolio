import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IWorkItem } from '../../models/item-work';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-work',
  templateUrl: './item-work.component.html',
  styleUrls: ['./item-work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemWorkComponent {
  @Input() public work: IWorkItem;

  constructor(private router: Router) {}

  public goTo(): void {
    this.router.navigateByUrl(`works/${this.work.order}`);
  }
}

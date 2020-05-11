import {
  AfterViewChecked,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, EventEmitter,
  OnInit, Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { IStatePages } from '../../models/state-pages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  @Output() public switchFooter = new EventEmitter<boolean>();
  public isNavShown: boolean;
  public statePages: IStatePages;

  constructor(private router: Router, private ref: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.isNavShown = false;
    this.statePages = { home: true, about: false };
  }

  public ngAfterViewChecked(): void {
    for (const page of Object.keys(this.statePages)) {
      this.statePages[page] = `/${page}` === this.router.url;
    }
    this.ref.detectChanges();
  }

  public goTo(path): void {
    for (const page of Object.keys(this.statePages)) {
      this.statePages[page] = `/${page}` === path;
    }
    this.switchFooter.emit(false);
    this.router.navigateByUrl(path);
    if (this.isNavShown) {
      this.showMenu();
    }
  }

  public showMenu(): void {
    document.body.classList.toggle('overflow-hidden');
    this.isNavShown = !this.isNavShown;
  }
}

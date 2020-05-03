import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStatePages } from '../../models/state-pages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isNavShown: boolean;
  public statePages: IStatePages;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.isNavShown = false;
    this.statePages = { home: true, 'about-me': false };
  }

  public goTo(path): void {
    for (const page of Object.keys(this.statePages)) {
      this.statePages[page] = `/${page}` === path;
    }
    this.router.navigateByUrl(path);
  }

  public showMenu(): void {
    document.body.classList.toggle('overflow-hidden');
    this.isNavShown = !this.isNavShown;
  }
}

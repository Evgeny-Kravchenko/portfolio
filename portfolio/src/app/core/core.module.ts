import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HammerModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeaderComponent, HomePageComponent],
  imports: [CommonModule, HammerModule],
  exports: [HeaderComponent, HammerModule],
})
export class CoreModule {}

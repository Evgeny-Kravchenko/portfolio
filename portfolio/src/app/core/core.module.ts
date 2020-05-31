import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DescriptionComponent } from './components/description/description.component';
import { WorksComponent } from './components/works/works.component';
import { ItemWorkComponent } from './components/item-work/item-work.component';
import { WorksService } from './services/works.service';
import { WorksFilterPipe } from './pipes/works-filter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { WorkDescriptionComponent } from './pages/work-description/work-description.component';
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    DescriptionComponent,
    WorksComponent,
    ItemWorkComponent,
    WorksFilterPipe,
    FooterComponent,
    WorkDescriptionComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    NgxSpinnerModule
  ],
  exports: [HeaderComponent, FooterComponent, BrowserAnimationsModule],
  providers: [WorksService],
})
export class CoreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DescriptionComponent } from './components/description/description.component';
import { WorksComponent } from './components/works/works.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ItemWorkComponent } from './components/item-work/item-work.component';
import { WorksService } from './services/works.service';
import { WorksFilterPipe } from './pipes/works-filter.pipe';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    DescriptionComponent,
    WorksComponent,
    ItemWorkComponent,
    WorksFilterPipe,
    FooterComponent,
  ],
  imports: [CommonModule, MatTabsModule, MatCardModule],
  exports: [HeaderComponent, MatTabsModule, MatCardModule],
  providers: [WorksService],
})
export class CoreModule {}

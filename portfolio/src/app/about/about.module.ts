import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { BiographyComponent } from './components/biography/biography.component';
import { TecnologiesComponent } from './components/tecnologies/tecnologies.component';
import { CanvasAnimationService } from './services/canvas-animation.service';
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    AboutComponent,
    CertificatesComponent,
    BiographyComponent,
    TecnologiesComponent,
  ],
  imports: [CommonModule, AboutRoutingModule, NgxSpinnerModule],
  providers: [CanvasAnimationService],
})
export class AboutModule {}

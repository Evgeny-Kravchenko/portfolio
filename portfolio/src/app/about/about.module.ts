import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { BiographyComponent } from './components/biography/biography.component';

@NgModule({
  declarations: [AboutComponent, CertificatesComponent, BiographyComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}

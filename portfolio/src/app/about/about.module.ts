import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

@NgModule({
  declarations: [AboutComponent, CertificatesComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}

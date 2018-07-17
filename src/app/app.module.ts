import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { HomeComponent } from './components/landing/home/home.component';
import { LandingNavComponent } from './components/landing/landing-nav/landing-nav.component';
import { HomeBannerComponent } from './components/landing/home/home-banner/home-banner.component';
import { HomeAboutComponent } from './components/landing/home/home-about/home-about.component';
import { HomeTechComponent } from './components/landing/home/home-tech/home-tech.component';
import { HomeServiceComponent } from './components/landing/home/home-service/home-service.component';
import { HomeClientComponent } from './components/landing/home/home-client/home-client.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ServiceViewComponent } from './views/service-view/service-view.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { AdminComponent } from './views/admin/admin.component';
import { OffsetComponent } from './views/service-view/offset/offset.component';
import { CarrouselServiceComponent } from './views/service-view/carrousel-service/carrousel-service.component';
import { DigitalPrintComponent } from './views/service-view/digital-print/digital-print.component';
import { BigFormatComponent } from './views/service-view/big-format/big-format.component';
import { DigitalMediaComponent } from './views/service-view/digital-media/digital-media.component';
import { FinishedComponent } from './views/service-view/finished/finished.component';
import { EstampComponent } from './views/service-view/estamp/estamp.component';
import { PackComponent } from './views/service-view/pack/pack.component';
import { ContactComponent } from './views/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    HomeComponent,
    LandingNavComponent,
    HomeBannerComponent,
    HomeAboutComponent,
    HomeTechComponent,
    HomeServiceComponent,
    HomeClientComponent,
    FooterComponent,
    ServiceViewComponent,
    UserProfileComponent,
    AdminComponent,
    OffsetComponent,
    CarrouselServiceComponent,
    DigitalPrintComponent,
    BigFormatComponent,
    DigitalMediaComponent,
    FinishedComponent,
    EstampComponent,
    PackComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

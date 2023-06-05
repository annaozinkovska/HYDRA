import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToEditComponent } from './to-edit/to-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutInformComponent } from './about-inform/about-inform.component';
import { TECHNOLOGIESComponent } from './technologies/technologies.component';
import { FooterComponent } from './footer/footer.component';
import { JoinComponent } from './join/join.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { HttpClientModule } from '@angular/common/http';
import { register } from 'swiper/element/bundle';
import { SlidesComponent } from './slides/slides.component';
import { ServicesComponent } from './services/services.component';

// import { SearchService } from './service/search.service';
// import { Users } from './users';
const AppRoutes: Routes = [
  { path: 'about', component: AboutInformComponent },
  { path: 'TECHNOLOGIES', component: TECHNOLOGIESComponent },
  { path: 'CONTACT', component: FooterComponent },
  { path: 'join', component: JoinComponent },
  { path: 'services', component: ServicesComponent },
{ path: '', redirectTo: 'slides',pathMatch: 'full',},

{ path: 'slides', component: SlidesComponent,},]
@NgModule({
  declarations: [
    AppComponent,
    ToEditComponent,
    AboutInformComponent,
    TECHNOLOGIESComponent,
    FooterComponent,
    JoinComponent,
    ServicesComponent,
    ToEditComponent,
    CarouselBasicComponent,
    SlidesComponent,
    // SearchService,
    // Users
    
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

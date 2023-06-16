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
import { SlidesComponent } from './slides/slides.component';
import { ServicesComponent } from './services/services.component';
import { MenuComponent } from './menu/menu.component';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { Swiper3Component } from './swiper3/swiper3.component';
import { NumberSliderModule } from './NumberSlider/NumberSlider.module';
import { PostSliderModule } from './PostSlider/PostSlider.module';
import { GeneralComponent } from './general/general.component';
import { AdminComponent } from './admin/admin.component';
const AppRoutes: Routes = [
  { path: 'toEdit', component: ToEditComponent },
  { path: 'about', component: AboutInformComponent },
  { path: 'TECHNOLOGIES', component: TECHNOLOGIESComponent },
  { path: 'join', component: JoinComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', redirectTo: 'app', pathMatch: 'full', },
  { path: 'slides', component: SlidesComponent, },
  { path: 'app', component: GeneralComponent, },
  { path: 'CONTACT', component: FooterComponent },
  { path: 'admin', component: AdminComponent },
]

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
    Swiper3Component,
    MenuComponent,
    GeneralComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,//для форми інпуту
    HttpClientModule,// провайдер к серверу 
    ImageSliderModule,// slaider in TECHNOLOGIESComponent,
    NumberSliderModule,// slaider in Swiper3Component
    PostSliderModule, // slaider in Sliders + cart ( mongo -index1.js)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

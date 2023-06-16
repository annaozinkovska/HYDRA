import { Component } from '@angular/core';
// import { SlideInterface } from '../imageSlider/types/slide.interface';
import { SlidePostInterface } from '../NumberSlider/types/slidepost.interface';
@Component({
  selector: 'app-swiper3',
  templateUrl: './swiper3.component.html',
  styleUrls: ['./swiper3.component.scss']
})
export class Swiper3Component {
     slides: SlidePostInterface[] = [
    { number:'01' , title: '3D Conception & Design' },
    { number: '02', title: 'Interaction Design' },
    { number:'03', title: 'VR World User Testing' },
    { number:'04', title: 'Hydra VR Deploy' },
  ];

}

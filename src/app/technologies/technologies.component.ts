import { Component } from '@angular/core';
import { SlideInterface } from '../imageSlider/types/slide.interface';
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TECHNOLOGIESComponent {
  slides: SlideInterface[] = [
    { url: 'https://i.imgur.com/9e6Dk0h.png', title: '' },
    { url: 'https://i.imgur.com/OMESKYf.png', title: ''},
    { url: 'https://i.imgur.com/xme4aa7.png', title: ''},
    { url: 'https://i.imgur.com/W0PYBDy.png', title: '' },
  ];
}

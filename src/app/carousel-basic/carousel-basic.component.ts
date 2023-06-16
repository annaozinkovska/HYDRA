import { Component, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common'
import { register } from 'swiper/element/bundle';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-carousel',
	templateUrl:'./carousel-basic.component.html',
	styleUrls: ['./carousel-basic.component.scss']

})
export class CarouselBasicComponent {
	@Input() title = '';
	@Input() text = '';
	@Input() img = '';

	
}

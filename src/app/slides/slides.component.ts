
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SlidePostInterface } from '../PostSlider/types/slidepost.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'corp-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlidesComponent  {

  @Input() slides: SlidePostInterface[]=[]

  constructor( private http:HttpClient ){
    this.http.get('http://localhost:4223')
    .subscribe((data)=> this.addusers(data));
  }
 
  addusers(data: any){
    this.slides=data;
    console.log(this.slides);
    
  }

 
}
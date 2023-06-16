import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';
import { SlidePostInterface } from '../PostSlider/types/slidepost.interface';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
}) 
export class ServicesComponent  {
  @Input() slides: SlidePostInterface[]=[]

  constructor( private http:HttpClient ){
    this.http.get('http://localhost:4234')
    .subscribe((data)=>console.log(data));
  }

  addusers(data: any){
    this.slides=data;
    console.log(this.slides);
    
  }


}

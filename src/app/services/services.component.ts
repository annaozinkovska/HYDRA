import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
}) 
export class ServicesComponent implements OnInit {
   users={}

  constructor( private http:HttpClient ){}
  OnInit(): void {
    throw new Error('Method not implemented.');
  }

  OnInput(): void {
      this.http.get('http://localhost:4234')
      .subscribe((data)=>this.addusers(data));
  }
  addusers(data: any){
    this.users=data;
  }


}

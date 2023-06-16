import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { SlideUsersInterface } from '../PostSlider/types/slideusers.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  @Input() slides: SlideUsersInterface[]=[]

  constructor( private http:HttpClient ){
    this.http.get('http://localhost:4234')
    .subscribe((data)=> this.addusers(data));
  }

  addusers(data: any){
    this.slides=data;
    console.log(this.slides);
    
  }

// inserttodb(){
//   this.user
// }
}

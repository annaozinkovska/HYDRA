import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SlideUsersInterface } from '../PostSlider/types/slideusers.interface';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent {
 @Input() user={
    name:String,
    lastname:String,
    email: String,
    number:String,
    Subject:String,
    text:String,
    }

   onSubmit( data:NgForm){
this.user.name=data.value.name
this.user.lastname=data.value.lastname
this.user.email=data.value.email
this.user.Subject=data.value.Subject
this.user.number=data.value.number
this.user.text=data.value.text
 console.log(this.user);
  
}
  @Input() slides: SlideUsersInterface[]=[]

  constructor( private http:HttpClient ){
    this.http.get('http://localhost:4234')
    .subscribe((data)=>console.log(data));
    
  }

  addusers(data: any){
    this.slides=data;
    console.log(this.slides);
    
  }

// inserttodb(){
// this.http.post.(this.user.name: Object)
// }

}

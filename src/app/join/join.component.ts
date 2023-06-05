import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

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

}

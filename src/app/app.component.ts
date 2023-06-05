import { Input } from "@angular/core";
import { Component } from "@angular/core";
import { SearchService } from "./service/search.service";
import { OnInit } from "@angular/core";
import { Subscriber } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[SearchService],
})
export class AppComponent  { 
  
  // usershtml!: Users;
    
  // constructor(private searchService : SearchService){}
    
  // ngOnInit(){
        
  //     this.searchService.getData().subscribe({next:(data:any) => this.data=new Users(data.emeil, data.number)});
  // }
}
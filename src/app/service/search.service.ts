import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

  export class SearchService {}
//   getData() {
//     throw new Error("Method not implemented.");
//   }
//   configUrl="http://localhost:4234"
//    constructor(private http: HttpClient) { }
//       getConfig(){
//         return  this.http.get<Config>(this.configUrl)
//     }
//   }
      
      
  

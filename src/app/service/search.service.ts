import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SlideUsersInterface } from '../PostSlider/types/slideusers.interface';

@Injectable()

  export class SearchService {
  // configUrl="http://localhost:4234"
  // constructor(private http: HttpClient) {}

  // //http://localhost:4234/join/ngForm/value 
  // postData(user: SlideUsersInterface) {
  //   const body = { name: user.name, age: user.number }
  //   return this.http.post(
  //     'http://localhost:4234',
  //     body
  //   )
  // }
  
  }
      
  

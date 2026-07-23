import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { API_CONFIG } 
from '../config/api.config';



@Injectable({
  providedIn:'root'
})
export class ApiService {


constructor(
 private http:HttpClient
){}



get<T>(url:string):Observable<T>{

 return this.http.get<T>(
   `${API_CONFIG.baseUrl}/${url}`
 );

}



post<T>(
 url:string,
 data:any
):Observable<T>{


 return this.http.post<T>(
   `${API_CONFIG.baseUrl}/${url}`,
   data
 );

}



put<T>(
 url:string,
 data:any
):Observable<T>{


 return this.http.put<T>(
   `${API_CONFIG.baseUrl}/${url}`,
   data
 );

}



delete<T>(url:string):Observable<T>{


 return this.http.delete<T>(
   `${API_CONFIG.baseUrl}/${url}`
 );

}



}
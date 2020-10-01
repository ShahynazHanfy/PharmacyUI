import { Injectable } from '@angular/core';
import{Order} from '../Models/Order'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient : HttpClient) { }
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};

  GetAll(): Observable <Order[]>{
    return this.httpClient.get<Order[]> (`${environment.order}`,this.httpHeader) ;
}
insertDrug(Order: Order): Observable <any >{
  console.log(Order+"d")
  return this.httpClient.post<any> (`${environment.order}`,Order,this.httpHeader) ;
}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
   userName :string
   password :string
  
   httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  constructor(private httpClient:HttpClient) { }

  login(userName :string,password:string){
    this.userName=userName;
    this.password=password;
    let Data={userName,password}
    console.log(Data)
  return this.httpClient.post('http://localhost:51563/api/Authenticate/login',Data,this.httpHeader)
  }

  public isLoggedIn()
  {
    return !! localStorage.getItem("token");
  }
}

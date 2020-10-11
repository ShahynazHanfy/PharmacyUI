import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Employee} from '../Models/Employee'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient : HttpClient) { }
 
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};

  GetAllEmployees(): Observable <Employee[]>
  {
    return this.httpClient.get<Employee[]> (`${environment.employee}`,this.httpHeader) ;
  }

  insertEmployee(emp: Employee): Observable <any >
  {
    console.log(emp)
    return this.httpClient.post<any> (`${environment.employee}`,emp,this.httpHeader) ;
  }
  deleteEmp(id: number):Observable <any> {
    return this.httpClient.delete('http://localhost:51563/api/employees/'+ id);
  }
  updateEmp(emp: Employee,id:number): Observable <any >{
    return this.httpClient.put<any> (`${environment.employee}${id}`,emp,this.httpHeader) ;
  }

  getEmpByID(empID: number): Observable <Employee>{
    console.log(empID+"hhhh")
    return this.httpClient.get<Employee> (`${environment.employee}${empID}`,this.httpHeader) ;
  }
  
}

import { Injectable } from '@angular/core';
// import { Drug } from '../Models/Drug';
import {Drug} from '../Models/Drug'
import {TheraGroup} from './../Models/TheraGroup'
import{TheraSubGroup} from './../Models/TheraSubGroup'
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Form } from '../Models/Form';
import{Firm} from './../Models/Firm'
import{Unit} from './../Models/Unit'
import{ROAD} from './../Models/ROAD'
import{Country} from './../Models/Country'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor(private httpClient : HttpClient) { }
 
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};

  GetAll(): Observable <Drug[]>{
    return this.httpClient.get<Drug[]> (`${environment.Drug}`,this.httpHeader) ;
}

insertDrug(Drug: Drug): Observable <any >{
  console.log(Drug+"d")
  return this.httpClient.post<any> (`${environment.Drug}`,Drug,this.httpHeader) ;
}
  
getDrug(id: number): Observable <Drug>{
  return this.httpClient.get<Drug> (`${environment.Drug}${id}`,this.httpHeader) ;
}

updateDrug(drug: Drug,id:number): Observable <any >{
  return this.httpClient.put<any> (`${environment.Drug}${id}`,drug,this.httpHeader) ;
}

// DeleteCustomer(id: number): Observable <Drug>{
//   return this.httpClient.get<Drug> (`${environment.DeleteCustomer}${id}`,this.httpHeader) ;
// }
deleteDrug(id: number):Observable <any> {
  return this.httpClient.delete('http://localhost:51563/api/Drugs/'+ id);

}

GetAllThera(): Observable <TheraGroup[]>{
  return this.httpClient.get<TheraGroup[]> (`${environment.Thera}`,this.httpHeader) ;
}

GetAllTheraSub(): Observable <TheraSubGroup[]>{
  return this.httpClient.get<TheraSubGroup[]> (`${environment.TheraSub}`,this.httpHeader) ;
}
getSubByGrpID(Grpid: number): Observable <TheraSubGroup[]>{
  return this.httpClient.get<TheraSubGroup[]> (`${environment.therasubBYgroup}${Grpid}`,this.httpHeader) ;
}

GetAllForms(): Observable <Form[]>{
  return this.httpClient.get<Form[]> (`${environment.Forms}`,this.httpHeader) ;
}

GetAllFirms(): Observable <Firm[]>{
  return this.httpClient.get<Firm[]> (`${environment.Firm}`,this.httpHeader) ;
}

GetAllUnits(): Observable <Unit[]>{
  return this.httpClient.get<Unit[]> (`${environment.Unit}`,this.httpHeader) ;
}

GetAllCountry(): Observable <Country[]>{
  return this.httpClient.get<Country[]> (`${environment.Country}`,this.httpHeader) ;
}
GetAllROAD(): Observable <ROAD[]>{
  return this.httpClient.get<ROAD[]> (`${environment.ROAD}`,this.httpHeader) ;
}

postFile(fileToUpload: File): Observable<boolean> {
  const endpoint = 'http://localhost:51563/api/drugs/api/Drugs/UploadImage';
  const formData: FormData = new FormData();
  formData.append('file', fileToUpload, fileToUpload.name);
  return this.httpClient
    .post(endpoint, formData).pipe(
    map(() => { return true; }));
}

getDrugByID(drugID: number): Observable <Drug>{
  console.log(drugID+"hhhh")
  return this.httpClient.get<Drug> (`${environment.Drug}${drugID}`,this.httpHeader) ;
}

}

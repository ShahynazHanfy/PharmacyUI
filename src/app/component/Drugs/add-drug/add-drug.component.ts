import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'; 
import {DrugService} from '../../../services/drug.service'
import {Drug} from './../../../Models/Drug'
import {TheraGroup} from './../../../Models/TheraGroup'
import {TheraSubGroup} from './../../../Models/TheraSubGroup'
import {Unit} from './../../../Models/Unit'
import {Country} from './../../../Models/Country'
import {ROAD} from './../../../Models/ROAD'
import {Form} from './../../../Models/Form'
import {Firm} from './../../../Models/Firm'
import { from } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent implements OnInit {

  Drug:Drug
  Form:Form[]
  Unit:Unit[]
  firm:Firm[]
  Country:Country[]
  ROAD:ROAD[]
  Thera:TheraGroup[]
  TheraSub:TheraSubGroup[]
  TheraGroupID = 0
  fileToUpload: File;
  
  constructor(private drugservice:DrugService,private routee:Router,private ActivatedRoute:ActivatedRoute) 
  {
    this.Drug=
   { 
    barCode:'',genericName:'',license:'',strength:0,code:'',img:'',pack:0,reOrderLevel:'',tradeName:'',
    TheraSubGroupID:0,FormID:0,FirmID:0,UnitID:0,ROADID:0,CountryID:0
   }
  }
   ngOnInit() {
    this.drugservice.GetAllThera()
    .subscribe(Thera => {
      this.Thera= Thera,
      console.log(Thera)
  }  
    ,error=>{console.log(error);
    }) ;

    this.drugservice.GetAllForms()
    .subscribe(Form => {
      this.Form= Form,
      console.log(Form)
  }
    ,error=>{console.log(error);
    }) 

    this.drugservice.GetAllFirms()
    .subscribe(Firm => {
      this.firm= Firm,
      console.log('firm'+Firm)
  }
    ,error=>{console.log(error);
    }) 

    this.drugservice.GetAllUnits()
    .subscribe(units => {
      this.Unit= units,
      console.log('unit'+units)
  }
    ,error=>{console.log(error);
    }) 

    this.drugservice.GetAllCountry()
    .subscribe(Country => {
      this.Country= Country,
      console.log('country'+Country)
  }
    ,error=>{console.log(error);
    }) 

    this.drugservice.GetAllROAD()
    .subscribe(ROAD => {
      this.ROAD= ROAD,
      console.log('road'+ROAD)
  }
    ,error=>{console.log(error);
    }) 
}

SubmitDrug(){
  console.log(this.Drug); 
  this.Drug.TheraSubGroupID=Number(this.Drug.TheraSubGroupID);
  this.Drug.FormID=Number(this.Drug.FormID);
  this.Drug.FirmID=Number(this.Drug.FirmID);
  console.log(typeof(this.Drug.FirmID))
  console.log(this.Drug.FirmID)
  this.Drug.CountryID=Number(this.Drug.CountryID);
  this.Drug.ROADID=Number(this.Drug.ROADID);
  this.Drug.UnitID=Number(this.Drug.UnitID);
  console.log(typeof(this.Drug.TheraSubGroupID));
  this.drugservice.insertDrug(this.Drug)
  .subscribe(Drug => {
    console.log("Mabork y wa74")
    this.routee.navigate(['/showdrug'])
    
}
  ,error=>{console.log(error);
  }) ;
}
  OnChangeGroupID( i: any){
    console.log(i.targ)
     this.drugservice.getSubByGrpID(this.TheraGroupID).subscribe(TheraSub => {
      this.TheraSub= TheraSub,
      console.log(TheraSub)
  }
    ,error=>{console.log(error);
    }) ;
  }

  
onFileSelected(files: FileList) {

  this.fileToUpload = files.item(0);
  const oldName = this.fileToUpload.name;
  const fileExtension = oldName.slice(oldName.lastIndexOf('.') - oldName.length);
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const lengthOfCode = 40;
  const newName=this.makeRandom(lengthOfCode, possible);
  
  console.log(this.fileToUpload.name);
  Object.defineProperty(this.fileToUpload,'name',{
    writable:true,
    value:newName+fileExtension
  });
  console.log(this.fileToUpload.name);

  this.Drug.img=this.fileToUpload.name;
  //alert(this.prd.Img);

  this.uploadFileToActivity();
}
uploadFileToActivity() {
this.drugservice.postFile(this.fileToUpload).subscribe(data => {
  // do something, if upload success
  //c(data);
  }, error => {
    console.log(error);
  });
}
makeRandom(lengthOfCode,possible)
{
let text="";
for(let i=0;i<lengthOfCode;i++)
{
  text+=possible.charAt(Math.floor(Math.random()*possible.length))
}
return text;
}
}

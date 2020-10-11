import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import {EmployeesService} from '../../../services/employees.service'
import {Pharmacy} from '../../../Models/Pharmacy'
import {DrugService} from '../../../services/drug.service'
import {MessageService} from 'primeng/api';
import { ConfirmationService, Message, SelectItem } from 'primeng/api';
import { Router,ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [MessageService]

})
export class EmployeeComponent implements OnInit {

  employees:Employee[]
  displayModal: boolean;
  displayBaic:boolean
  employee:Employee
  empIdRow:number
  pharmacy:Pharmacy[]
  msgs: Message[] = [];

  constructor(private empService:EmployeesService , private drugService:DrugService,
  private messageService: MessageService,
  private confirmationService: ConfirmationService,
  private routee:Router,private ActivatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
   
    this.employee =
    {
      id:0,name:'',address:'',email:'',pharmacyID:0,telephone:''
    }
    
    this.empService.GetAllEmployees()
    .subscribe(emps=>{
    this.employees=emps
    console.log(this.employees)
    })
    this.drugService.GetAllPharmacies()
    .subscribe(pharmacy=>{
    this.employee.pharmacyID=Number(this.employee.pharmacyID)
      this.pharmacy=pharmacy
    })
    
  }
  
  showModalDialog()
  {
    this.displayModal = true;
  }

  showBasicDialog()
  {
    this.displayBaic = true;
  }

  addNewEmployee()
  {
    console.log(this.employee)
    this.employee.pharmacyID=Number(this.employee.pharmacyID)

    this.empService.insertEmployee(this.employee)
    .subscribe(e=>{
      console.log(e)
      this.ngOnInit()
    })
    this.displayModal = false;
  }
showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
}

showInfo() {
  this.messageService.add({severity:'info', summary: 'Info', detail: 'Drug Deleted Successfully'});
}

showWarn() {
  this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Drug Deleted Successfully'});
}

showError() {
  this.messageService.add({severity:'error', summary: 'Error', detail: 'Drug Deleted Successfully'});
}

showTopLeft() {
  this.messageService.add({key: 'tl', severity:'info', summary: 'Info', detail: 'Message Content'});
}
deleteOneEmp(id:number)
{
  this.empService.deleteEmp(id).subscribe(
   emps=>{
     console.log(emps)
     this.empService.GetAllEmployees().subscribe(e=>
      this.employees=e
      )
   }
  )
  console.log(id)
}

editEmp()
{
console.log(this.empIdRow)
this.empService.updateEmp(this.employee,this.empIdRow).subscribe(e=>{
  console.log("Mabrook Y bb"),
  this.routee.navigate(['home/employee'])
  this.displayBaic =false
  this.empService.GetAllEmployees().subscribe(emps=>{
    this.employees=emps
  })

})
}
  editBasicDialog(id){
    this.empIdRow = id
   this.displayBaic=true
    this.empService.getEmpByID(id).subscribe(emp=>{
      console.log(emp)
    this.employee=emp;
  })
  }


  // confirmmmmmmm(id:number) {
  //   this.confirmationService.confirm({
  //       message: 'Do you want to delete this record?',
  //       header: 'Delete Confirmation',
  //       icon: 'pi pi-info-circle',
  //       accept: () => {
  //       console.log(id)
  //         this.deleteOneEmp(id)
  //           this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
  //       },
  //       reject: () => {
  //           this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
  //       }
  //   });
  // }

  
  








  
}

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {UsersService} from '../../../services/users.service'
import {User} from '../../../Models/User'
import { EmployeesService } from 'src/app/Services/employees.service';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  users:User[];
  GetUnregisteredUsers:any;
  NewUser:User;
  AllEmployees: any;
  NewLeaveDialogbool:boolean;
  constructor(private userService:UsersService,private EmpService:EmployeesService) { 
    this.NewUser={email:'',role:'',userName:'',password:'M@sTech146'};
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      data=>{
        this.users=data;
        console.log(data)
      },
      error=>console.log(error)
      );
      this.EmpService.GetAllEmployees().subscribe(
        data=>{
          this.AllEmployees=data;
          console.log(data)
        },
        error=>console.log(error)
        );
        this.userService.GetUnregisteredUsers().subscribe(
          data=>this.GetUnregisteredUsers=data,
          error=>console.log(error)
        )
  }

  addNewUser()
  {
    console.log(this.NewUser);
    this.userService.addUser(this.NewUser).subscribe(
      data=>this.ngOnInit()
    )
  }
  NewUserDialog()
  {
    this.NewLeaveDialogbool=true;
  }
  onChange(event){
    this.AllEmployees.forEach(element => {
      if(element.id==event)
      {
        this.NewUser.email=element.email;
        this.NewUser.userName=element.name;
      }
    });
    
  }
}

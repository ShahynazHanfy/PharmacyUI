import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:any
  password:any
  constructor(private loginSer:LoginService,private routee:Router) { }

  ngOnInit() {
  }
  getData(){
    this.loginSer.login(this.username,this.password)
    .subscribe(
      res=>{
        console.log(res)
        localStorage.setItem("token",res["token"])
        console.log(localStorage.getItem("token")),
        this.routee.navigate(['/showdrug'])
      },error=>{console.log(error)}
    )
  }

}

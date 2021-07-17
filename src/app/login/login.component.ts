// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { Http } from '@angular/http';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User }    from './user';
import { LoginService } from "./login.service";
import { Router } from "@angular/router";
declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @Output() isLoggedIn = new EventEmitter();
  constructor(private http:Http,private loginService:LoginService, private router:Router) {}
  // model = new User('','',null,'','','');
  model=new User('','','');
  submitted = false;
  onSubmit() { 
    this.submitted = true;
   }


  ngOnInit() {
    document.querySelector('.img__btn').addEventListener('click', function() {
      document.querySelector('.cont').classList.toggle('s--signup');
    });
  }

  // onClick(cmd){
  //   if(cmd == "signin"){
  //     let data = {name: "saroj"};
  //     this.http.post("http://localhost/auction/mov.php",data)
  //     .subscribe((name)=>{console.log(name)})
  //   }
  // }
  
  // email = "sona@gmail.com";
  // onClick(cmd:string){
  //   switch(cmd){
  //     case 'signin':
  //     console.log("sign in page")
  //     console.log(this.model.email)
  //       for(let i = 0;i<=this.loginService.loginTree.length;i++){
  //         console.log("service"+this.loginService.loginTree[i].email)
  //         if(this.email == this.model.email){
  //             this.isLoggedIn.emit({loginFlag:true,email:this.email})
  //             console.log("|||")
  //             // this.router.navigate(['/home'])              
  //           }
  //       }
  //     break;
  //   }
  // }

}

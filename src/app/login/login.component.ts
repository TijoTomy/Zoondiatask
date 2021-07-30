import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required]),
    password: new FormControl('',[
      Validators.required]),
  });
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.loginForm)
    if(this.loginForm.controls.userName.value=="Admin"){
this.route.navigateByUrl("/product")
    }
    else{
      if(this.loginForm.controls.userName.value=="Reader")
      this.route.navigateByUrl("/dashboard")
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule , Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MyServiceService]
})
export class LoginComponent implements OnInit {
  hide=true;
  // constructor(private routes : Router , private service : MyServiceService) { }
  // msg="";
  constructor(private fb: FormBuilder, private routes : Router, private myService: MyServiceService){}

  ngOnInit(): void {
  }
  // check(uname: string, p: string)
  // {
  //   var output = this.service.check(uname, p);
  //   if(output === true)
  //   {
  //     this.routes.navigate(['/dashboard']);
  //   }
  //   else{
  //     this.routes.navigate(['/login']);
  //     // this.msg ='Invalid username or password';
  //   }
  // }
  

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
})

  onLogin() {
    if (!this.loginForm.valid) {
      alert ('Enter the correct username and password');
    }
    else{
      let data = {
        userName : this.loginForm.value.username,
        id: (Math.random())
      };
      localStorage.setItem('userName', JSON.stringify(data));
      // this.myService.login;
      this.routes.navigate(['/dashboard']);
    }
  }

  }

import { Component, OnInit } from '@angular/core';
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

  constructor(private routes : Router , private service : MyServiceService) { }
  msg="";

  ngOnInit(): void {
  }
  check(uname: string, p: string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.routes.navigate(['/dashboard']);
    }
    else{
      this.msg ='Invalid username or password';
    }
  }

}

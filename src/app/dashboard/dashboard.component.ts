import { Component, OnInit } from '@angular/core';
import { AuthguardGuard } from '../authguard.guard';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent{
  routes: any;
  // constructor(private Autheticate AuthguardGuard){}
  // logout(){
    // localStorage.removeItem("userName");
    // localStorage.removeItem('userName');
  //   this.routes.navigate(['']);
  // }
}





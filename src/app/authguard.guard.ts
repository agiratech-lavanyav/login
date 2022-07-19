
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyServiceService } from './my-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate{
  routes: any;
  constructor(private authService: AuthguardGuard, private myservice: MyServiceService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("Comes inside can activate");
      if (this.myservice.isAuthenticate) {
        this.routes.navigate(['/dashboard']);
        return true;
      } else {
        return false;
      }
  //     if(localStorage.getItem('username')!= null){
  //   return true;
  // }
  // else{
  //   // this.routes.navigate(['\login']);
  //   return false;
  // }
  
}
}


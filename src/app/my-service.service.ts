import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor() { }

  isAuthenticate = false;

  login(username: string, password: string): boolean {
    
    if (localStorage.getItem(JSON.parse('username'))!=null) {
      this.isAuthenticate = true;
      return this.isAuthenticate;
    }
    this.isAuthenticate = false;
    return this.isAuthenticate;

}
}




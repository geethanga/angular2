import { Component } from '@angular/core';
import {LoginService} from '../services/loginService';

@Component({
  moduleId: module.id,
  selector: 'login-form',
  providers: [LoginService],
  templateUrl: 'login.component.html'
})

export class LoginComponent{
  constructor(public loginService: LoginService){}

  username: string;
  password: string;

  public loginClick(){
    this.loginService.login(this.username, this.password);
  }
}
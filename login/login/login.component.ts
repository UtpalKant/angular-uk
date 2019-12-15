import { Component, OnInit } from '@angular/core';
import { LoginService } from 'login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginSvc: LoginService) { }

  ngOnInit() {
    console.log('login');
    this.loginSvc.getToken().subscribe(x=> {
      console.log(x);
      this.loginSvc.testApi().subscribe(x=>{
        console.log(x);
      });
      console.log('making cookie check call');
    });
  }
}

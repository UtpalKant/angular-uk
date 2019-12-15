import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({'providedIn': "root"})
export class LoginService{
    constructor(private httpSvc: HttpClient){}
    getToken(){
        let url = "https://travelmaniac.herokuapp.com/login?username=utpal007&password=P@ssw0rd";
        return this.httpSvc.get(url);
    }

    testApi(){
        let url = "https://travelmaniac.herokuapp.com/check";
        return this.httpSvc.get(url);
    }
}
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class LoginService{
    constructor(private http: Http, private activatedRoute: ActivatedRoute) {
    }
    loginTree=[
        {id:1,email:'sona@gmail.com',password:'sona'},
        {id:2,email:'example@gmail.com',password:'example'}
    ]
}
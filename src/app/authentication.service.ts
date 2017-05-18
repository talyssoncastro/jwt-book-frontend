import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthenticationService {
    private authUrl = 'http://localhost:8020/auth';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

   

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.authUrl, JSON.stringify({username: username, password: password}), {headers: this.headers})
            .map((response: Response)=>{
                let token = response.json() && response.json().token;
                if (token) {
                    sessionStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
                    return true;
                } else {
                    return false;
                }
            });
    }

    getToken(): String {
        var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : '';
    }

    logout(): void {
        sessionStorage.removeItem('currentUser');
    }

    isLoggedIn(): boolean {
        var token: String = this.getToken();
        return token && token.length > 0;
    }

}
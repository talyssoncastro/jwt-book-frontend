import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

import { AuthenticationService } from '../authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private http: Http) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {

        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                // login efetuado com sucesso
                if (result == true) {
                    this.router.navigate(['']);
                } else {
                    this.error = "Usuário e/ou senha incorreto.";
                    this.loading = false;
                }
            }, error => {
                this.loading = false;
                this.error = error;
            });

    }

}

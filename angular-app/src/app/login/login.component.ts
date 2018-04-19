import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../shared/app.service';

@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    isCredentialsWrong = false;
    isLoginError = false;

    constructor(private router: Router,
        private service: AppService) {}

    ngOnInit() {
        if (this.service.loggedInUser && !this.service.loggedInUser.username) {
            this.router.navigate(['login']);
        }
    }

    submit() {
        this.service.authenticate(this.username, this.password)
        .subscribe((response: Response) => {
            const data = response.json()['data'];
            if (data['key'] === 'login-success' || data['key'] === 'user-created') {
                const user = {
                    username: data['username'],
                    isLoggedIn: true
                };
                this.service.loggedInUser = user;
                this.router.navigate(['home/create-vm']);
            } else {
                const user = {
                    username: data['username'],
                    isLoggedIn: false
                };
                this.service.loggedInUser = user;
                this.isCredentialsWrong = true;
            }
        }, (error: Response) => {
            console.log(error.json());
            this.isLoginError = true;
            const user = {
                username: undefined,
                isLoggedIn: false
            };
            this.service.loggedInUser = user;
        });
    }
}

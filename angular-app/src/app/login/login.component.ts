import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../shared/app.service';

@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username: string;
    password: string;

    constructor(private router: Router,
        private service: AppService) {}

    submit() {
        console.log(this.username, this.password);
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
                this.router.navigate(['/login']);
            }
        }, (error: Response) => {
            console.log(error.json());
        });
    }
}

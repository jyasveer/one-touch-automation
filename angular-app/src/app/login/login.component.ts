import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../shared/app.service';

@Component({
    selector: 'app-login',
    styleUrls: [],
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
            console.log(data);
            if (data['key'] === 'login-success' || data['key'] === 'user-created') {
                this.service.loginEvent.next(true);
                this.router.navigate(['/create-vm', data['username']]);
            } else {
                this.service.loginEvent.next(false);
                this.router.navigate(['/home']);
            }
        }, (error: Response) => {
            console.log(error.json());
        });
    }
}

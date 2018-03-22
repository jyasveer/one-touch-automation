import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { LoginModel } from '../shared/model/app.models';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    loginObj: LoginModel;

    constructor(private service: AppService) {}

    ngOnInit() {
        this.service.loginEvent
        .subscribe((loginObj: LoginModel) => {
            this.loginObj = loginObj;
        });
    }

    logout() {
        this.service.loginEvent.next({
            username: '', isLoggedIn: false
        });
    }
}
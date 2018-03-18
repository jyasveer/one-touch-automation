import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    isLoggedIn = false;

    constructor(private service: AppService) {}

    ngOnInit() {
        this.service.loginEvent
        .subscribe((isLoggedIn: boolean) => {
            this.isLoggedIn = isLoggedIn;
        });
    }

    logout() {
        this.service.loginEvent.next(false);
    }
}
import {
    Injectable
} from '@angular/core';
import {
    Http
} from '@angular/http';
import {
    Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';
import { LoginModel, VmModel } from './model/app.models';

@Injectable()
export class AppService {
    loginEvent = new Subject<LoginModel>();
    // private host = 'http://bng-infra-automation.juniper.net:8082';
    private host = 'http://localhost:8082';

    constructor(private http: Http) {}

    authenticate(username, password): Observable < any > {
        const loginObj = {
            username: username,
            password: password
        };
        return this.http.post( this.host + '/authenticate', loginObj);
    }

    getOsData() {
        return this.http.get(this.host + '/data/os');
    }

    createVc(location, data): Observable < any > {
        const obj = {
            location,
            data
        };
        return this.http.post( this.host + '/create-vc', obj);
    }

    getLocationData(location: string    ) {
        return this.http.get(this.host + '/data/' + location);
    }

    createVm(vm: VmModel) {
        const payload = JSON.stringify({extra_vars: vm});
        console.log('payload in create vm', payload);
        return this.http.post(this.host + '/create-vm', {vm: payload});
    }

    deleteVm(vm: VmModel) {
        const payload = JSON.stringify({extra_vars: vm});
        console.log('payload in delete vm', payload);
        return this.http.post(this.host + '/delete-vm', {vm: payload});
    }

    private extractData(response: Response): any {
        const body = response.json() || {};
        body['statusCode'] = response.status;
        body['statusText'] = response.statusText;
        return body;
    }

    private handleError(error: Response | any) {
        let body: any = {};
        if (error instanceof Response) {
            if (error && error.status && error.statusText) {
                body = {
                    status: error.status,
                    statusText: error.statusText
                };
            }
        } else {
            body = {
                statusText: error.message ? error.message : error.toString()
            };
        }
        return Observable.throw(body);
    }
}

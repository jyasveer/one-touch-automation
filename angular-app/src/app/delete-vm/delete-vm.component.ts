import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import {
  VmModel
} from '../shared/model/app.models';
import {
  AppService
} from '../shared/app.service';

@Component({
  selector: 'app-delete-vm',
  styleUrls: ['./delete-vm.component.scss'],
  templateUrl: './delete-vm.component.html',
})
export class DeleteVmComponent implements OnInit {
  machineName = '';
  vcName = '';
  email = '';
  userEmail = '';
  isPreview = false;
  isVmDeleting = false;
  isVmDeleted = false;
  isVmDeleteError = false;
  showSubmit = true;
  private deleteVmId: string;

  constructor(
    private router: Router,
    private service: AppService) {}

  ngOnInit() {
    if (this.service.loggedInUser && this.service.loggedInUser.username) {
      this.userEmail = this.service.loggedInUser.username;
    } else {
      this.router.navigate(['login']);
    }
  }

  onSubmit() {
    this.showSubmit = false;
    this.isVmDeleting = true;
    this.service.getCreateVmId()
      .subscribe((response) => {
        if (response) {
          const resJson = response.json();
          const data = resJson['data'];
          if (data) {
            this.deleteVmId = data['id'];
            this.deleteVm();
          }
        }
      });
  }

  deleteVm() {
    let emails = '';
    if (this.email) {
      emails = this.userEmail + ',' + this.email;
    } else {
      emails = this.userEmail;
    }
    const vmToDelete: VmModel = {
      vmname: this.machineName,
      vc_name: this.vcName,
      email_address: emails,
    };
    this.service.deleteVm(this.deleteVmId, vmToDelete)
      .subscribe((response) => {
        console.log('response from delete vm', response.json());
        this.isVmDeleting = false;
        this.isVmDeleted = true;
      }, (error: Response) => {
        console.log('error in delete vm', error.json());
        this.isVmDeleting = false;
        this.isVmDeleteError = true;
      });
  }
}

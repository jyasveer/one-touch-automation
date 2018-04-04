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
  private deleteVmLaunchId: string;
  private deleteVmJobId: string;
  private setIntervalReference: any;

  constructor(
    private router: Router,
    private service: AppService) { }

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
    this.isVmDeleted = false;
    this.isVmDeleteError = false;
    this.service.getDeleteVmLaunchId()
      .subscribe((response) => {
        if (response) {
          const resJson = response.json();
          const data = resJson['data'];
          if (data) {
            this.deleteVmLaunchId = data['id'];
            this.deleteVm();
          }
        }
      }, (error: Response) => {
        console.log('error in fetch delete launch id', error.json());
        this.isVmDeleted = false;
        this.isVmDeleting = false;
        this.isVmDeleteError = true;
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
    this.service.deleteVm(this.deleteVmLaunchId, vmToDelete)
      .subscribe((response) => {
        if (response) {
          const resJson = response.json();
          const data = resJson['data'];
          if (data) {
            this.deleteVmJobId = data['job'];
            this.pollForJobStatus();
          }
        }
        this.isVmDeleting = true;
      }, (error: Response) => {
        console.log('error in delete vm', error.json());
        this.isVmDeleted = false;
        this.isVmDeleting = false;
        this.isVmDeleteError = true;
      });
  }

  pollForJobStatus() {
    // for now the interval is 10 sec
    this.setIntervalReference = setInterval(this.getJobStatus.bind(this), 10000);
  }

  getJobStatus() {
    this.service.getJobStatus(this.deleteVmJobId)
      .subscribe((response) => {
        if (response) {
          const resJson = response.json();
          const data = resJson['data'];
          if (data) {
            let status: string = data['status'];
            if (status) {
              status = status.toLowerCase();
              if (status === 'successful') {
                this.isVmDeleted = true;
                this.isVmDeleting = false;
                this.isVmDeleteError = false;
                this.clearIntervalReference();
              } else if (status === 'pending' || status === 'running') {
                this.isVmDeleted = false;
                this.isVmDeleting = true;
                this.isVmDeleteError = false;
              } else if (status === 'failed') {
                this.isVmDeleted = false;
                this.isVmDeleting = false;
                this.isVmDeleteError = true;
                this.clearIntervalReference();
              }
            }
          }
        }
      }, (error: Response) => {
        console.log('error in fetch job status for create vm', error.json());
        this.isVmDeleting = false;
        this.isVmDeleted = false;
        this.isVmDeleteError = true;
      });
  }

  private clearIntervalReference() {
    clearInterval(this.setIntervalReference);
  }
}

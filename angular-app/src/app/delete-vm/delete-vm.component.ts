import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private service: AppService) {}

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.userEmail = params['email'];
      });
  }

  onSubmit() {
    this.isVmDeleting = true;
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
    this.service.deleteVm(vmToDelete)
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

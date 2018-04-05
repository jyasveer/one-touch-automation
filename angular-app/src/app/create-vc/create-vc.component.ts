import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-create-vc',
  templateUrl: './create-vc.component.html',
  styleUrls: ['./create-vc.component.scss']
})
export class CreateVcComponent implements OnInit {
  newVcName = '';
  isVcNamePresent = false;
  selectedRegion = '';
  showSubmit = true;
  isVcAdded = false;
  isVcAddError = false;

  private regionData: any = null;
  private userEmail: string;
  private vcNameArray: Array < string > = [];

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

  getDataForRegion() {
    this.resetForRegion();
    this.service.getLocationData(this.selectedRegion)
      .subscribe((response) => {
        let data = null;
        if (response.json()['data']) {
          data = JSON.parse(response.json()['data']);
        }
        this.regionData = data;
        this.extractVcList();
      }, (error: Response) => {
        console.log('error in fetch region data', error);
      });
  }

  checkIfVcNameExists() {
    if (this.newVcName) {
      this.isVcNamePresent = false;
      if (this.regionData && (this.regionData['vcenters'] as Array<string>).indexOf(this.newVcName) !== -1) {
        this.isVcNamePresent = true;
      }
    } else {
      this.isVcNamePresent = false;
    }
  }

  createVc() {
    this.showSubmit = false;
    this.isVcAdded = false;
    this.isVcAddError = false;
    let regionData = this.regionData;
    if (regionData) {
      regionData['vcenters'].push(this.newVcName);
    } else {
      regionData = {
        vcenters: []
      };
      regionData.vcenters.push(this.newVcName);
    }
    const payload = JSON.stringify(regionData);
    this.service.createVc(this.selectedRegion, payload)
      .subscribe((response) => {
        const data = JSON.parse(response.json()['data']['data']);
        this.isVcAdded = true;
        this.isVcAddError = false;
      }, (error: Response) => {
        console.log('error in adding vc', error);
        this.isVcAdded = false;
        this.isVcAddError = true;
      });
  }

  get isButtonDisabled(): boolean {
    return this.newVcName === '' || this.isVcNamePresent;
  }

  private extractVcList() {
    console.log(this.regionData);
    if (this.regionData && this.regionData['vcenters']) {
      this.vcNameArray = this.regionData['vcenters'];
    }
  }

  private resetForRegion() {
    this.vcNameArray = [];
    this.regionData = null;
  }
}

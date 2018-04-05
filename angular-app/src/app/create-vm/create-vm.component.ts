import {
    Component,
    OnInit,
    TemplateRef
} from '@angular/core';
import {
    Router
} from '@angular/router';

import {
    AppService
} from '../shared/app.service';
import { VmModel } from '../shared/model/app.models';

@Component({
    selector: 'app-create-vm',
    styleUrls: ['./create-vm.component.scss'],
    templateUrl: './create-vm.component.html'
})
export class CreateVmComponent implements OnInit {
    machineName = '';
    selectedOs = '';
    selectedRegion = '';
    selectedVc = '';
    selectedDc = '';
    selectedBu = '';
    selectedCluster = '';
    selectedResourcePool = '';
    selectedInterfaceType = '';
    selectedInterface = '';
    osNameArray: Array < string > = [];
    vcNameArray: Array < string > = [];
    dcNameArray: Array < string > = [];
    buNameArray: Array < string > = [];
    clusterNameArray: Array < string > = [];
    resourcePoolArray: Array < string > = [];
    interfaceTypeArray: Array < string > = [];
    interfaceArray: Array < string > = [];
    email: string;
    userEmail: string;
    incNumber: string;
    isPreview = false;
    isVmCreating = false;
    isVmCreated = false;
    isVmCreateError = false;
    showSubmit = true;

    private regionData: any = null;
    private vcData: any = null;
    private dcData: any = null;
    private buData: any = null;
    private clusterData: any = null;
    private interfaceTypeData: any = null;
    private createVmLaunchId: string;
    private createVmJobId: string;
    private setIntervalReference: any;

    constructor(
        private router: Router,
        private service: AppService) {}

    ngOnInit() {
        if (this.service.loggedInUser && this.service.loggedInUser.username) {
            this.userEmail = this.service.loggedInUser.username;
        } else {
            this.router.navigate(['login']);
        }
        this.service.getOsData()
        .subscribe((response) => {
            if (response.json()['data']) {
                const osData = JSON.parse(response.json()['data']);
                this.osNameArray = osData['os'];
            }
        });
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
                console.log('error in fetch region data', error.json());
            });
    }

    getDataCenters(formModalRef: TemplateRef<any>) {
        this.resetForVC();
        console.log(this.selectedVc);
        this.extractDcList();
    }

    getBussinessUnits() {
        this.resetForDC();
        console.log(this.selectedDc);
        this.extractBuList();
    }

    getClusters() {
        this.resetForBU();
        console.log(this.selectedBu);
        this.extractClusterList();
    }

    getResourcePoolAndInterfaceTypes() {
        this.resetForCluster();
        console.log(this.selectedCluster);
        this.extractResourcePoolAndInterfaceTypeList();
    }

    getInterface() {
        this.resetForInterfaceType();
        console.log(this.selectedInterfaceType);
        this.extractInterfaceList();
    }

    onSubmit() {
        this.showSubmit = false;
        this.isVmCreated = false;
        this.isVmCreating = true;
        this.isVmCreateError = false;
        this.service.getCreateVmLaunchId()
        .subscribe((response) => {
            if (response) {
                const resJson = response.json();
                const data = resJson['data'];
                if (data) {
                    this.createVmLaunchId = data['id'];
                    this.createVm();
                }
            }
        }, (error: Response) => {
            console.log('error in fetching create vm launch id', error.json());
            this.isVmCreating = false;
            this.isVmCreated = false;
            this.isVmCreateError = true;
        });
    }

    createVm() {
        let emails = '';
        if (this.email) {
            emails = this.userEmail + ',' + this.email;
        } else {
            emails = this.userEmail;
        }
        const vm: VmModel = {
            osfamily: this.selectedOs,
            vmname: this.machineName,
            region: this.selectedRegion,
            vc_name: this.selectedVc,
            datacenter: this.selectedDc,
            business_unit: this.selectedBu,
            cluster_name: this.selectedCluster,
            resource_pool: this.selectedResourcePool,
            nic_type: this.selectedInterfaceType,
            vm_nic: this.selectedInterface,
            email_address: emails,
            inc_number: this.incNumber
        };
        this.service.createVm(this.createVmLaunchId, vm)
        .subscribe((response) => {
            if (response) {
                const resJson = response.json();
                const data = resJson['data'];
                if (data) {
                    this.createVmJobId = data['job'];
                    this.pollForJobStatus();
                }
            }
            this.isVmCreating = true;
        }, (error: Response) => {
            console.log('error in create vm', error.json());
            this.isVmCreating = false;
            this.isVmCreated = false;
            this.isVmCreateError = true;
        });
    }

    pollForJobStatus() {
        // for now the interval is 10 sec
        this.setIntervalReference = setInterval(this.getJobStatus.bind(this), 10000);
    }

    getJobStatus() {
        this.service.getJobStatus(this.createVmJobId)
        .subscribe((response) => {
            if (response) {
                const resJson = response.json();
                const data = resJson['data'];
                if (data) {
                    let status: string = data['status'];
                    if (status) {
                        status = status.toLowerCase();
                        if (status === 'successful') {
                            this.isVmCreated = true;
                            this.isVmCreating = false;
                            this.isVmCreateError = false;
                            this.clearIntervalReference();
                        } else if (status === 'pending' || status === 'running') {
                            this.isVmCreated = false;
                            this.isVmCreating = true;
                            this.isVmCreateError = false;
                        } else if (status === 'failed') {
                            this.isVmCreated = false;
                            this.isVmCreating = false;
                            this.isVmCreateError = true;
                            this.clearIntervalReference();
                        }
                    }
                }
            }
        }, (error: Response) => {
            console.log('error in fetch job status for create vm', error.json());
            this.isVmCreating = false;
            this.isVmCreated = false;
            this.isVmCreateError = true;
        });
    }

    private resetForRegion() {
        this.selectedVc = '';
        this.selectedDc = '';
        this.selectedBu = '';
        this.selectedCluster = '';
        this.selectedResourcePool = '';
        this.selectedInterfaceType = '';
        this.selectedInterface = '';
        this.vcNameArray = [];
        this.dcNameArray = [];
        this.buNameArray = [];
        this.clusterNameArray = [];
        this.resourcePoolArray = [];
        this.interfaceTypeArray = [];
        this.interfaceArray = [];
        this.regionData = null;
        this.vcData = null;
        this.dcData = null;
        this.buData = null;
        this.clusterData = null;
    }

    private resetForVC() {
        this.selectedDc = '';
        this.selectedBu = '';
        this.selectedCluster = '';
        this.selectedResourcePool = '';
        this.selectedInterfaceType = '';
        this.selectedInterface = '';
        this.dcNameArray = [];
        this.buNameArray = [];
        this.clusterNameArray = [];
        this.resourcePoolArray = [];
        this.interfaceTypeArray = [];
        this.interfaceArray = [];
        this.vcData = null;
        this.dcData = null;
        this.buData = null;
        this.clusterData = null;
    }

    private resetForDC() {
        this.selectedBu = '';
        this.selectedCluster = '';
        this.selectedResourcePool = '';
        this.selectedInterfaceType = '';
        this.selectedInterface = '';
        this.buNameArray = [];
        this.clusterNameArray = [];
        this.resourcePoolArray = [];
        this.interfaceTypeArray = [];
        this.interfaceArray = [];
        this.dcData = null;
        this.buData = null;
        this.clusterData = null;
    }

    private resetForBU() {
        this.selectedCluster = '';
        this.selectedResourcePool = '';
        this.selectedInterfaceType = '';
        this.selectedInterface = '';
        this.clusterNameArray = [];
        this.resourcePoolArray = [];
        this.interfaceTypeArray = [];
        this.interfaceArray = [];
        this.buData = null;
        this.clusterData = null;
    }

    private resetForCluster() {
        this.selectedResourcePool = '';
        this.selectedInterfaceType = '';
        this.selectedInterface = '';
        this.resourcePoolArray = [];
        this.interfaceTypeArray = [];
        this.interfaceArray = [];
        this.clusterData = null;
    }

    private resetForInterfaceType() {
        this.selectedInterface = '';
        this.interfaceArray = [];
    }

    private extractVcList() {
        console.log(this.regionData);
        if (this.regionData && this.regionData['vcenters']) {
            this.vcNameArray = this.regionData['vcenters'];
        }
    }

    private extractDcList() {
        if (this.regionData) {
            this.vcData = this.regionData[this.selectedVc];
            if (this.vcData && this.vcData['datacenters']) {
                this.dcNameArray = this.vcData['datacenters'];
            }
        }
    }

    private extractBuList() {
        if (this.vcData) {
            this.dcData = this.vcData[this.selectedDc];
            if (this.dcData && this.dcData['business_units']) {
                this.buNameArray = this.dcData['business_units'];
            }
        }
    }

    private extractClusterList() {
        if (this.dcData) {
            this.buData = this.dcData[this.selectedBu];
            if (this.buData && this.buData['clusters']) {
                this.clusterNameArray = this.buData['clusters'];
            }
        }
    }

    private extractResourcePoolAndInterfaceTypeList() {
        if (this.buData) {
            this.clusterData = this.buData[this.selectedCluster];
            if (this.clusterData) {
                this.resourcePoolArray = this.clusterData['resource_pools'] ? this.clusterData['resource_pools'] : [];
                this.interfaceTypeArray = this.clusterData['nic_type'] ? this.clusterData['nic_type'] : [];
            }
        }
    }

    private extractInterfaceList() {
        if (this.clusterData) {
            this.interfaceTypeData = this.clusterData[this.selectedInterfaceType];
            if (this.interfaceTypeData) {
                this.interfaceArray = this.interfaceTypeData ? this.interfaceTypeData : [];
            }
        }
    }

    private clearIntervalReference() {
        clearInterval(this.setIntervalReference);
    }
}

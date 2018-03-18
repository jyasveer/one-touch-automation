import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router,
    ActivatedRoute
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
    selectedRegion = '';
    selectedVc = '';
    selectedDc = '';
    selectedBu = '';
    selectedCluster = '';
    selectedResourcePool = '';
    selectedInterfaceType = '';
    selectedInterface = '';
    vcNameArray: Array < string > = [];
    dcNameArray: Array < string > = [];
    buNameArray: Array < string > = [];
    clusterNameArray: Array < string > = [];
    resourcePoolArray: Array < string > = [];
    interfaceTypeArray: Array < string > = [];
    interfaceArray: Array < string > = [];
    email: string;
    isPreview = false;
    isVmCreating = false;
    isVmCreated = false;

    private regionData: any = null;
    private vcData: any = null;
    private dcData: any = null;
    private buData: any = null;
    private clusterData: any = null;
    private interfaceTypeData: any = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: AppService) {}

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                this.email = params['email'];
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

    getDataCenters() {
        this.resetForVC();
        console.log(this.selectedVc);
        if (this.selectedVc === 'create-new-vc') {
            console.log('modal to show create vm');
        } else {
            this.extractDcList();
        }
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
        this.isVmCreating = true;
        const vm: VmModel = {
            machineName: this.machineName,
            region: this.selectedRegion,
            vc: this.selectedVc,
            dc: this.selectedDc,
            bu: this.selectedBu,
            cluster: this.selectedCluster,
            resource: this.selectedResourcePool,
            intType: this.selectedInterfaceType,
            int: this.selectedInterface
        };
        this.service.createVm({vm: vm})
        .subscribe((response) => {
            console.log('response from create vm', response.json());
            this.isVmCreating = false;
            this.isVmCreated = true;
        }, (error: Response) => {
            console.log('error in create vm', error.json());
        });
        // setTimeout(() => {
        //     this.isVmCreating = false;
        //     this.isVmCreated = true;
        // }, 5000); // change the time here
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
}

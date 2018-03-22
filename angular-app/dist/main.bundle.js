webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_vm_create_vm_component__ = __webpack_require__("../../../../../src/app/create-vm/create-vm.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'create-vm/:email', component: __WEBPACK_IMPORTED_MODULE_4__create_vm_create_vm_component__["a" /* CreateVmComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.loadedFeature = 'recipe';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_app_service__ = __webpack_require__("../../../../../src/app/shared/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_vm_create_vm_module__ = __webpack_require__("../../../../../src/app/create-vm/create-vm.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_10__create_vm_create_vm_module__["a" /* CreateVmModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__shared_app_service__["a" /* AppService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/create-vm/create-vm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <!-- <alert type=\"success\" *ngIf=\"isVmCreated\">\n        <strong>VM is created successfully.</strong>\n    </alert>\n    <alert type=\"info\" *ngIf=\"isVmCreating\">\n        <strong>VM is being created.</strong>\n    </alert> -->\n    <div class=\"col-lg-6\">\n        <form class=\"form-horizontal\" role=\"form\" #vmForm=\"ngForm\">\n            <div class=\"form-group\">\n                <label class=\"col-sm-4 control-label\">* VM Name\n                </label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"VIRTUAL MACHINE NAME\" required *ngIf=\"!isPreview\" [(ngModel)]=\"machineName\"\n                        name=\"name\" #name=\"ngModel\">\n                    <div *ngIf=\"isPreview\">{{ machineName }}</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-4 control-label\">* OS Family</label>\n                <div class=\"col-sm-8\">\n                    <select name=\"select-vc\" class=\"form-control\" required [(ngModel)]=\"selectedOs\" *ngIf=\"!isPreview\"\n                        name=\"osName\" #osName=\"ngModel\">\n                        <option value=\"\">SELECT-OS</option>\n                        <option *ngFor=\"let os of osNameArray\" [value]=\"os\">{{ os }}</option>\n                    </select>\n                    <div *ngIf=\"isPreview\">{{ selectedOs ? selectedOs : '---' }}</div>\n                    <div class=\"text-muted\" *ngIf=\"!isPreview && osNameArray?.length === 0\">OS data not found.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-4 control-label\">* Region Name</label>\n                <div class=\"col-sm-8\">\n                    <select name=\"select-region\" class=\"form-control\" required (change)=\"getDataForRegion()\" [(ngModel)]=\"selectedRegion\" *ngIf=\"!isPreview\"\n                        name=\"region\" #region=\"ngModel\">\n                        <option value=\"\">SELECT-REGION</option>\n                        <option value=\"bng\">Bangalore</option>\n                        <option value=\"svl\">Sunnyvale</option>\n                        <option value=\"qnc\">QNC</option>\n                    </select>\n                    <div *ngIf=\"isPreview\">{{ selectedRegion ? selectedRegion : '---' }}</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-4 control-label\">* VC Name</label>\n                <div class=\"col-sm-8\">\n                    <select name=\"select-vc\" class=\"form-control\" required [(ngModel)]=\"selectedVc\" (change)=\"getDataCenters(formModal)\" *ngIf=\"!isPreview\"\n                        name=\"vcName\" #vcName=\"ngModel\" [disabled]=\"selectedRegion === ''\">\n                        <option value=\"\">SELECT-VC NAME</option>\n                        <option value=\"create-new-vc\">Create VC</option>\n                        <option *ngFor=\"let vc of vcNameArray\" [value]=\"vc\">{{ vc }}</option>\n                    </select>\n                    <div *ngIf=\"isPreview\">{{ selectedVc ? selectedVc : '---' }}</div>\n                    <div class=\"text-muted\" *ngIf=\"!isPreview && selectedRegion !== '' && vcNameArray?.length === 0\">VC not found for selected Region.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-4 control-label\">* DC Name</label>\n                <div class=\"col-sm-8\">\n                    <select name=\"select-dc\" class=\"form-control\" required [(ngModel)]=\"selectedDc\" (change)=\"getBussinessUnits()\" *ngIf=\"!isPreview\"\n                        name=\"dcName\" #dcName=\"ngModel\">\n                        <option value=\"\">SELECT-DC NAME</option>\n                        <option *ngFor=\"let dc of dcNameArray\" [value]=\"dc\">{{ dc }}</option>\n                    </select>\n                    <div *ngIf=\"isPreview\">{{ selectedDc ? selectedDc : '---'}}</div>\n                    <div class=\"text-muted\" *ngIf=\"!isPreview && selectedVc !== '' && selectedVc !== 'create-new-vc' && dcNameArray?.length === 0\">DC not found for selected VC.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-4 control-label\">* BU Name</label>\n                <div class=\"col-sm-8\">\n                    <select name=\"select-bu\" class=\"form-control\" required [(ngModel)]=\"selectedBu\" (change)=\"getClusters()\" *ngIf=\"!isPreview\"\n                        name=\"buName\" #buName=\"ngModel\">\n                        <option value=\"\">SELECT-BU NAME</option>\n                        <option *ngFor=\"let bu of buNameArray\" [value]=\"bu\">{{ bu }}</option>\n                    </select>\n                    <div *ngIf=\"isPreview\">{{ selectedBu ? selectedBu : '---' }}</div>\n                    <div class=\"text-muted\" *ngIf=\"!isPreview && selectedDc !== '' && buNameArray?.length === 0\">BU not found for selected DC.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-4 control-label\">* Cluster Name</label>\n                <div class=\"col-sm-8\">\n                    <select name=\"select-cluster\" class=\"form-control\" required [(ngModel)]=\"selectedCluster\" (change)=\"getResourcePoolAndInterfaceTypes()\"\n                        *ngIf=\"!isPreview\" name=\"cluster\" #cluster=\"ngModel\">\n                        <option value=\"\">SELECT-CLUSTER</option>\n                        <option *ngFor=\"let cluster of clusterNameArray\" [value]=\"cluster\">{{ cluster }}</option>\n                    </select>\n                    <div *ngIf=\"isPreview\">{{ selectedCluster ? selectedCluster : '---' }}</div>\n                    <div class=\"text-muted\" *ngIf=\"!isPreview && selectedBu !== '' && clusterNameArray?.length === 0\">Cluster not found for selected BU.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-4 control-label\">Resource Pool</label>\n                <div class=\"col-sm-8\">\n                    <select name=\"select-resource\" class=\"form-control\" [(ngModel)]=\"selectedResourcePool\" *ngIf=\"!isPreview\" name=\"resource\"\n                        #resource=\"ngModel\">\n                        <option value=\"\">SELECT-RESOURCE</option>\n                        <option *ngFor=\"let rp of resourcePoolArray\" [value]=\"rp\">{{ rp }}</option>\n                    </select>\n                    <div *ngIf=\"isPreview\">{{ selectedResourcePool ? selectedResourcePool : '---' }}</div>\n                    <div class=\"text-muted\" *ngIf=\"!isPreview && selectedCluster !== '' && resourcePoolArray?.length === 0\">Resource Pool not found for selected Cluster.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-4 control-label\">* Interface Type</label>\n                <div class=\"col-sm-8\">\n                    <select name=\"select-interface-type\" class=\"form-control\" required [(ngModel)]=\"selectedInterfaceType\" *ngIf=\"!isPreview\"\n                        name=\"interfaceType\" #interfaceType=\"ngModel\" (change)=\"getInterface()\">\n                        <option value=\"\">SELECT-INTERFACE-TYPE</option>\n                        <option *ngFor=\"let intType of interfaceTypeArray\" [value]=\"intType\">{{ intType }}</option>\n                    </select>\n                    <div *ngIf=\"isPreview\">{{ selectedInterfaceType ? selectedInterfaceType : '---'}}</div>\n                    <div class=\"text-muted\" *ngIf=\"!isPreview && selectedCluster !== '' && interfaceTypeArray?.length === 0\">Interface Type not found for selected Cluster.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-4 control-label\">* Interface Details</label>\n                <div class=\"col-sm-8\">\n                    <select name=\"select-interface\" class=\"form-control\" required [(ngModel)]=\"selectedInterface\" *ngIf=\"!isPreview\" name=\"interface\"\n                        #interface=\"ngModel\">\n                        <option value=\"\">SELECT-INTERFACE</option>\n                        <option *ngFor=\"let int of interfaceArray\" [value]=\"int\">{{ int }}</option>\n                    </select>\n                    <div *ngIf=\"isPreview\">{{ selectedInterface ? selectedInterface : '---'}}</div>\n                    <div class=\"text-muted\" *ngIf=\"!isPreview && selectedInterfaceType !== '' && interfaceArray?.length === 0\">Interface not found for selected Interface type.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-4 control-label\">* Email Address </label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"EMAIL\" [(ngModel)]=\"email\" *ngIf=\"!isPreview\" name=\"emailString\" #emailString=\"ngModel\" required>\n                    <div *ngIf=\"isPreview\">{{ email ? email : '---'}}</div>\n                    <div class=\"text-muted\" *ngIf=\"!isPreview && email === ''\">Email should not be empty.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-4 control-label\">* INC Number </label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter INC_NUMBER\" [(ngModel)]=\"incNumber\" *ngIf=\"!isPreview\" name=\"incNumberString\" #incNumberString=\"ngModel\" required>\n                    <div *ngIf=\"isPreview\">{{ incNumber ? incNumber : '---'}}</div>\n                    <div class=\"text-muted\" *ngIf=\"!isPreview && incNumber === ''\">INC_NUMBER should not be empty.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-sm-offset-4 col-sm-8\">\n                    <button type=\"button\" class=\"btn btn-default\" *ngIf=\"! isPreview\" (click)=\"isPreview = true\" [disabled]=\"vmForm.invalid\">Next</button>\n                </div>\n                <div class=\"col-sm-offset-4 col-sm-8\">\n                    <button type=\"button\" class=\"btn btn-default\" *ngIf=\"isPreview && !isVmCreated\" (click)=\"onSubmit()\">Submit</button>\n                    <button type=\"button\" class=\"btn btn-default\" style=\"margin-left: 10px\" *ngIf=\"isPreview && !isVmCreating && !isVmCreated\"\n                        (click)=\"isPreview = false\">Back</button>\n                </div>\n            </div>\n        </form>\n        <ng-template #formModal>\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">Create VC</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"formModalRef.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <label>Please enter a VC name:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newVcName\">\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-default\" (click)=\"createVc()\">Create</button>\n                    <button class=\"btn btn-default\" (click)=\"formModalRef.hide()\">Cancel</button>\n                </div>\n            </div>\n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/create-vm/create-vm.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group div {\n  margin-top: 4px; }\n\n.modal-header {\n  padding: 10px 15px 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-vm/create-vm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateVmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_service__ = __webpack_require__("../../../../../src/app/shared/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateVmComponent = (function () {
    function CreateVmComponent(route, router, modalService, service) {
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.service = service;
        this.machineName = '';
        this.selectedOs = '';
        this.selectedRegion = '';
        this.selectedVc = '';
        this.selectedDc = '';
        this.selectedBu = '';
        this.selectedCluster = '';
        this.selectedResourcePool = '';
        this.selectedInterfaceType = '';
        this.selectedInterface = '';
        this.osNameArray = [];
        this.vcNameArray = [];
        this.dcNameArray = [];
        this.buNameArray = [];
        this.clusterNameArray = [];
        this.resourcePoolArray = [];
        this.interfaceTypeArray = [];
        this.interfaceArray = [];
        this.isPreview = false;
        this.isVmCreating = false;
        this.isVmCreated = false;
        this.regionData = null;
        this.vcData = null;
        this.dcData = null;
        this.buData = null;
        this.clusterData = null;
        this.interfaceTypeData = null;
    }
    CreateVmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.email = params['email'];
        });
        this.service.getOsData()
            .subscribe(function (response) {
            if (response.json()['data']) {
                var osData = JSON.parse(response.json()['data']);
                _this.osNameArray = osData['os'];
            }
        });
    };
    CreateVmComponent.prototype.getDataForRegion = function () {
        var _this = this;
        this.resetForRegion();
        this.service.getLocationData(this.selectedRegion)
            .subscribe(function (response) {
            var data = null;
            if (response.json()['data']) {
                data = JSON.parse(response.json()['data']);
            }
            _this.regionData = data;
            _this.extractVcList();
        }, function (error) {
            console.log('error in fetch region data', error.json());
        });
    };
    CreateVmComponent.prototype.getDataCenters = function (formModalRef) {
        this.resetForVC();
        console.log(this.selectedVc);
        if (this.selectedVc === 'create-new-vc') {
            this.openModal(formModalRef);
        }
        else {
            this.extractDcList();
        }
    };
    CreateVmComponent.prototype.getBussinessUnits = function () {
        this.resetForDC();
        console.log(this.selectedDc);
        this.extractBuList();
    };
    CreateVmComponent.prototype.getClusters = function () {
        this.resetForBU();
        console.log(this.selectedBu);
        this.extractClusterList();
    };
    CreateVmComponent.prototype.getResourcePoolAndInterfaceTypes = function () {
        this.resetForCluster();
        console.log(this.selectedCluster);
        this.extractResourcePoolAndInterfaceTypeList();
    };
    CreateVmComponent.prototype.getInterface = function () {
        this.resetForInterfaceType();
        console.log(this.selectedInterfaceType);
        this.extractInterfaceList();
    };
    CreateVmComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isVmCreating = true;
        var vm = {
            osfamily: this.selectedOs,
            vmname: this.machineName,
            region: this.selectedRegion,
            vc_name: this.selectedVc,
            datacenter: this.selectedDc,
            business_unit: this.selectedBu,
            mapped_cluster_name: this.selectedCluster,
            resource_pool: this.selectedResourcePool,
            nic_type: this.selectedInterfaceType,
            vm_nic: this.selectedInterface,
            email_address: this.email,
            inc_number: this.incNumber
        };
        this.service.createVm(vm)
            .subscribe(function (response) {
            console.log('response from create vm', response.json());
            _this.isVmCreating = false;
            _this.isVmCreated = true;
        }, function (error) {
            console.log('error in create vm', error.json());
        });
        // setTimeout(() => {
        //     this.isVmCreating = false;
        //     this.isVmCreated = true;
        // }, 5000); // change the time here
    };
    CreateVmComponent.prototype.openModal = function (template) {
        this.formModalRef = this.modalService.show(template);
    };
    CreateVmComponent.prototype.createVc = function () {
        this.formModalRef.hide();
        this.regionData['vcenters'].push(this.newVcName);
        var regionData = JSON.stringify(this.regionData);
        this.service.createVc(this.selectedRegion, regionData)
            .subscribe(function (response) {
            var data = JSON.parse(response.json()['data']['data']);
            console.log('vc is added successfully', data);
        });
    };
    CreateVmComponent.prototype.resetForRegion = function () {
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
    };
    CreateVmComponent.prototype.resetForVC = function () {
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
    };
    CreateVmComponent.prototype.resetForDC = function () {
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
    };
    CreateVmComponent.prototype.resetForBU = function () {
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
    };
    CreateVmComponent.prototype.resetForCluster = function () {
        this.selectedResourcePool = '';
        this.selectedInterfaceType = '';
        this.selectedInterface = '';
        this.resourcePoolArray = [];
        this.interfaceTypeArray = [];
        this.interfaceArray = [];
        this.clusterData = null;
    };
    CreateVmComponent.prototype.resetForInterfaceType = function () {
        this.selectedInterface = '';
        this.interfaceArray = [];
    };
    CreateVmComponent.prototype.extractVcList = function () {
        console.log(this.regionData);
        if (this.regionData && this.regionData['vcenters']) {
            this.vcNameArray = this.regionData['vcenters'];
        }
    };
    CreateVmComponent.prototype.extractDcList = function () {
        if (this.regionData) {
            this.vcData = this.regionData[this.selectedVc];
            if (this.vcData && this.vcData['datacenters']) {
                this.dcNameArray = this.vcData['datacenters'];
            }
        }
    };
    CreateVmComponent.prototype.extractBuList = function () {
        if (this.vcData) {
            this.dcData = this.vcData[this.selectedDc];
            if (this.dcData && this.dcData['business_units']) {
                this.buNameArray = this.dcData['business_units'];
            }
        }
    };
    CreateVmComponent.prototype.extractClusterList = function () {
        if (this.dcData) {
            this.buData = this.dcData[this.selectedBu];
            if (this.buData && this.buData['clusters']) {
                this.clusterNameArray = this.buData['clusters'];
            }
        }
    };
    CreateVmComponent.prototype.extractResourcePoolAndInterfaceTypeList = function () {
        if (this.buData) {
            this.clusterData = this.buData[this.selectedCluster];
            if (this.clusterData) {
                this.resourcePoolArray = this.clusterData['resource_pools'] ? this.clusterData['resource_pools'] : [];
                this.interfaceTypeArray = this.clusterData['nic_type'] ? this.clusterData['nic_type'] : [];
            }
        }
    };
    CreateVmComponent.prototype.extractInterfaceList = function () {
        if (this.clusterData) {
            this.interfaceTypeData = this.clusterData[this.selectedInterfaceType];
            if (this.interfaceTypeData) {
                this.interfaceArray = this.interfaceTypeData ? this.interfaceTypeData : [];
            }
        }
    };
    return CreateVmComponent;
}());
CreateVmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-vm',
        styles: [__webpack_require__("../../../../../src/app/create-vm/create-vm.component.scss")],
        template: __webpack_require__("../../../../../src/app/create-vm/create-vm.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_app_service__["a" /* AppService */]) === "function" && _d || Object])
], CreateVmComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/create-vm.component.js.map

/***/ }),

/***/ "../../../../../src/app/create-vm/create-vm.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateVmModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_alert__ = __webpack_require__("../../../../ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_vm_component__ = __webpack_require__("../../../../../src/app/create-vm/create-vm.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CreateVmModule = (function () {
    function CreateVmModule() {
    }
    return CreateVmModule;
}());
CreateVmModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__create_vm_component__["a" /* CreateVmComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__create_vm_component__["a" /* CreateVmComponent */]
        ]
    })
], CreateVmModule);

//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/create-vm.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"navbar navbar-default\" role=\"navigation\">\n                <div class=\"container-fluid\">\n                    <div class=\"navbar-header\">\n                        <div class=\"navbar-brand\">\n                            <a routerLink=\"/home\">\n                                <h1>ONE-TOUCH-AUTOMATION</h1>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"menu\">\n                        <ul class=\"nav nav-tabs\" role=\"tablist\">\n                            <li role=\"presentation\" routerLinkActive=\"active\">\n                                <a routerLink=\"/home\">Home</a>\n                            </li>\n                            <li role=\"presentation\" routerLinkActive=\"active\">\n                                <a routerLink=\"/create-vm/{{ loginObj?.username }}\">Create VM</a>\n                            </li>\n                            <li role=\"presentation\" routerLinkActive=\"active\" *ngIf=\"!loginObj?.isLoggedIn\">\n                                <a routerLink=\"/login\">Login</a>\n                            </li>\n                            <li role=\"presentation\" *ngIf=\"loginObj?.isLoggedIn\">\n                                <a routerLink=\"/home\" (click)=\"logout()\">Logout</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_service__ = __webpack_require__("../../../../../src/app/shared/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(service) {
        this.service = service;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.loginEvent
            .subscribe(function (loginObj) {
            _this.loginObj = loginObj;
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.service.loginEvent.next({
            username: '', isLoggedIn: false
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_app_service__["a" /* AppService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__header_component__["a" /* HeaderComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__header_component__["a" /* HeaderComponent */]
        ]
    })
], HeaderModule);

//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/header.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<carousel>\n    <slide>\n        <img src=\"http://res.cloudinary.com/jyasveer/image/upload/v1520773135/img3.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n    </slide>\n    <slide>\n        <img src=\"http://res.cloudinary.com/jyasveer/image/upload/v1520773564/img.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n    </slide>\n</carousel>\n<!-- Responsive slider - END -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html")
    })
], HomeComponent);

//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]
        ]
    })
], HomeModule);

//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/home.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-lg-6\">\n        <div class=\"form-horizontal\" role=\"form\">\n            <div class=\"form-group\">\n                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\" [(ngModel)]=\"username\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\" [(ngModel)]=\"password\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-sm-offset-2 col-sm-10\">\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\"> Remember me\n                        </label>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-sm-offset-2 col-sm-10\">\n                    <button type=\"button\" (click)=\"submit()\" class=\"btn btn-default\">Submit</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_app_service__ = __webpack_require__("../../../../../src/app/shared/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.username, this.password);
        this.service.authenticate(this.username, this.password)
            .subscribe(function (response) {
            var data = response.json()['data'];
            console.log(data);
            if (data['key'] === 'login-success' || data['key'] === 'user-created') {
                _this.service.loginEvent.next({
                    username: data['username'],
                    isLoggedIn: true
                });
                _this.router.navigate(['/create-vm', data['username']]);
            }
            else {
                _this.service.loginEvent.next({
                    username: data['username'],
                    isLoggedIn: false
                });
                _this.router.navigate(['/home']);
            }
        }, function (error) {
            console.log(error.json());
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        styleUrls: [],
        template: __webpack_require__("../../../../../src/app/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_app_service__["a" /* AppService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]
        ]
    })
], LoginModule);

//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/login.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = (function () {
    // private host = 'http://localhost:8082';
    function AppService(http) {
        this.http = http;
        this.loginEvent = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.host = 'http://bng-infra-automation.juniper.net:8082';
    }
    AppService.prototype.authenticate = function (username, password) {
        var loginObj = {
            username: username,
            password: password
        };
        return this.http.post(this.host + '/authenticate', loginObj);
    };
    AppService.prototype.getOsData = function () {
        return this.http.get(this.host + '/data/os');
    };
    AppService.prototype.createVc = function (location, data) {
        var obj = {
            location: location,
            data: data
        };
        return this.http.post(this.host + '/create-vc', obj);
    };
    AppService.prototype.getLocationData = function (location) {
        return this.http.get(this.host + '/data/' + location);
    };
    AppService.prototype.createVm = function (vm) {
        var payload = JSON.stringify({ extra_vars: vm });
        console.log('payload in create vm', payload);
        return this.http.post(this.host + '/create-vm', { vm: payload });
    };
    AppService.prototype.extractData = function (response) {
        var body = response.json() || {};
        body['statusCode'] = response.status;
        body['statusText'] = response.statusText;
        return body;
    };
    AppService.prototype.handleError = function (error) {
        var body = {};
        if (error instanceof Response) {
            if (error && error.status && error.statusText) {
                body = {
                    status: error.status,
                    statusText: error.statusText
                };
            }
        }
        else {
            body = {
                statusText: error.message ? error.message : error.toString()
            };
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(body);
    };
    return AppService;
}());
AppService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/app.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/jgotta/training/redis-nodejs/one-touch-automation/angular-app/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
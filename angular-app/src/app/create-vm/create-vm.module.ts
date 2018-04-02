import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CreateVmComponent } from './create-vm.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AlertModule.forRoot(),
        ModalModule.forRoot()
    ],
    declarations: [
        CreateVmComponent
    ],
    exports: [
        CreateVmComponent
    ]
})
export class CreateVmModule {

}

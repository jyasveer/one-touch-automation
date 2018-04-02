import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';

import { CommonModule } from '@angular/common';
import { DeleteVmComponent } from './delete-vm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
  ],
  declarations: [DeleteVmComponent],
  exports: [DeleteVmComponent]
})
export class DeleteVmModule { }

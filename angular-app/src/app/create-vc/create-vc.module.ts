import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';

import { CreateVcComponent } from './create-vc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
  ],
  declarations: [CreateVcComponent],
  exports: [CreateVcComponent]
})
export class CreateVcModule { }

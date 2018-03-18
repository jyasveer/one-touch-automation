import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        CarouselModule.forRoot()
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {

}
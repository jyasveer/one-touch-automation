import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { AppService } from './shared/app.service';
import { CreateVmModule } from './create-vm/create-vm.module';
import { DeleteVmModule } from './delete-vm/delete-vm.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    HeaderModule,
    CreateVmModule,
    DeleteVmModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

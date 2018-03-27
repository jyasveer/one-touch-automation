import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateVmComponent } from './create-vm/create-vm.component';
import { DeleteVmComponent } from './delete-vm/delete-vm.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'create-vm/:email', component: CreateVmComponent},
  { path: 'delete-vm', component: DeleteVmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

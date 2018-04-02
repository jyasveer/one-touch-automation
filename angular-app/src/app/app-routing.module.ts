import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateVmComponent } from './create-vm/create-vm.component';
import { DeleteVmComponent } from './delete-vm/delete-vm.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', component: CreateVmComponent },
      { path: 'create-vm', component: CreateVmComponent },
      { path: 'delete-vm', component: DeleteVmComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

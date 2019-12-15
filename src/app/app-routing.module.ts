import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'login', loadChildren: ()=>import('../../login/login.module').then(x=>x.LoginModule) },
  { path: 'dashboard', loadChildren: ()=>import('../../dashboard/dashboard.module').then(x=>x.DashboardModule)},
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
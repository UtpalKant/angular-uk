import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', component: DashboardComponent, resolve:[], canActivate:[]}

];

@NgModule({
    declarations:[DashboardComponent],
    imports:[RouterModule.forChild(routes)],
    providers:[]
})
export class DashboardModule{}
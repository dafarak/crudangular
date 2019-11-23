import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginlogoutGuard } from './loginlogout.guard';
//  import { NavbarComponent } from '../app/navbar/navbar.component';
import { ClientdetailComponent } from './clientdetail/clientdetail.component';
const routes: Routes = [
  { path: 'auth',  loadChildren: './pages/pages.module#PagesModule' },
  { path: 'dashbord', canActivate: [LoginlogoutGuard], loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'clientdetail', component: ClientdetailComponent  }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { ContactlistComponent } from './contactlist/contactlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [ {path:'' ,component:LoginComponent},
{path:'register',component:RegistrationComponent},
{path:'dashboard',component:DashboardComponent,
children:[
  {path:'contact' ,component:AddcontactComponent,  
  children:
  [
    {path:'listcontact',component:ContactlistComponent}]}

]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

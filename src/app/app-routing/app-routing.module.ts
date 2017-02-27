import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from '../contact-list/contact-list.component';
import { AppAboutComponent } from '../app-about/app-about.component';
import {ContactDetailsComponent} from "../contact-details/contact-details.component";

const routes:Routes = [

  {path:'', redirectTo:'/contacts', pathMatch:'full'},
  {path:'contacts', component: ContactListComponent},
  {path:'about', component: AppAboutComponent},
  {path:'contactdetails/:id', component: ContactDetailsComponent}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

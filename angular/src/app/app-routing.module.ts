import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AddcontactComponent } from './addcontact/addcontact.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {
    path:'addcontact',
    component : AddcontactComponent
  },
  {
    path:'showcontact',
    component : ContactComponent
  }

    

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

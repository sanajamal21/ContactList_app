import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule ,Routes} from '@angular/router'; 
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {AddContactComponent} from './add-contact/add-contact.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

const routes :Routes =[
{
    path: 'contacts' ,
  component: ContactsComponent
},
{
  path:'addcontact',
  component : AddContactComponent
}
];
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

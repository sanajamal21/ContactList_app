import {ContactService} from '../contact.service';
import{Contact} from '../contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent  {
  contacts :[];
  contact: Contact;
  first_name:string;
  last_name:string;
  phone:string;

  constructor(private contactService: ContactService)
  {
    this.contactService.getContacts().subscribe(data=>{
      console.warn(data)
      this.contacts =data as any;

    })

  }


}

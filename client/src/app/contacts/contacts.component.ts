import {ContactService} from '../contact.service';
import{Contact} from '../contact';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent  {
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

  // ngOnInit() {
  //   this.contactService.getContacts()
  //   .subscribe(contacts=>this.contacts);
  //     // this.contacts =contacts);
  // }

}

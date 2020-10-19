import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ContactService} from '../contact.service';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor(private contacts : ContactService) { }
addcontact = new FormGroup({ 
  first_name: new FormControl(''),
  last_name : new FormControl(''),
  phone :new FormControl('')
})
alert:boolean=false
  ngOnInit(): void {
  }
  getValues() 
{
 // console.warn(this.addcontact.value)
  this.contacts.saveContact(this.addcontact.value).subscribe((result)=>{
    console.warn(result)
    this.alert=true
  })
  this.addcontact.reset({})
}
closeAlert()
{
  this.alert=false
}
}

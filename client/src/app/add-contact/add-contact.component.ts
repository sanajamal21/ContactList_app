import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ContactService} from '../contact.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  
  
  constructor() {  }
  form =new FormGroup({
    first_name: new FormControl("aree"),
    last_name: new FormControl(''),
    phone: new FormControl('')
  })
 




  ngOnInit(): void {
  }
  onSubmit(value){
    console.warn(value)
    // console.warn(this.form.value)
    //  this.contact.saveContact(this.form.value).subscribe((result)=>{
    //    console.warn(result)
    //  })
  }

}

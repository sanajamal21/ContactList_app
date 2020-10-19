import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import{Contact} from './contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  //retrive contacts
  getContacts(){
    let url = "http://localhost:3000/api/contacts";
    return this.http.get(url);

  }
  //addcontact

  saveContact(data){
   console.warn(data)
    return this.http.post("http://localhost:3000/api/contact",data);
  }

  //delete contacts
  deleteContact(id){
    return this.http.delete("http://localhost:3000/api/contact/"+id)
      
  
  }
}

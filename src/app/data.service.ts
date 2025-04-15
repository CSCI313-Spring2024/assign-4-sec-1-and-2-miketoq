import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact';
import { contact } from './contact-data';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = contact;
  constructor() { }

  getContactById(id:number): Contact
  {
    return this.contacts.filter(contact => contact.contactId == id)[0];
  }

  getContact(): Observable<Contact[]>
  {
    return of(this.contacts);
  }

  deleteContactById(id:number)
  {
    this.contacts = this.contacts.filter(contact => contact.contactId != id);
    this.contactsUpdated.emit();
  }
  createContact(id:number, fname:string, lname:string, pnumber:string, newEmail:string)
  {
    const newContact:Contact = {
      contactId: id,
      firstName: fname,
      lastName: lname,
      pNumber: pnumber,
      email: newEmail
    };
    this.contacts.push(newContact);
  }

contactsUpdated = new EventEmitter<void>();
}

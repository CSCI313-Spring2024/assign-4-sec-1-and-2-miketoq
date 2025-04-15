import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { Contact } from '../contact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit{

  dataService = inject(DataService);
  id = input.required<number>();

  contact!: Contact;

  newId: number = -1;
  fname: string = "";
  lname: string = "";
  pnumber: string = "";
  email:string = "";


  ngOnInit()
  {
    this.contact = this.dataService.getContactById(this.id());
    this.fname = this.contact.firstName;
    this.lname = this.contact.lastName;
    this.pnumber = this.contact.pNumber;
    this.email = this.contact.email;
  }

  edit()
  {
    this.newId = this.contact.contactId;
    this.dataService.deleteContactById(this.contact.contactId);
    this.dataService.createContact(this.newId, this.fname, this.lname, this.pnumber, this.email);
  }
}

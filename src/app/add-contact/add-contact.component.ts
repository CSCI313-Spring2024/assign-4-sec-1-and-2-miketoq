import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {

  dataService = inject(DataService)

  fname:string = "";
  lname:string = "";
  pnumber:string = "";
  email:string = "";
  id:number = -1;

  //Starting at four because I have 4 hardcoded contacts
  static idCount:number = 4;
  //In a real scenario I wont need this static variable


  cContact()
  {
    this.id = ++AddContactComponent.idCount;
    this.dataService.createContact(this.id, this.fname, this.lname, this.pnumber, this.email);
  }
}

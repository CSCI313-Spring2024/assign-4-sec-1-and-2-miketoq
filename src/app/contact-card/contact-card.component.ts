import { Component, inject, input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { Contact } from '../contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  imports: [RouterLink],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {

  dataService = inject(DataService);

  id = input.required<number>();

  contact!: Contact;

  
  ngOnInit()
  {
    this.contact = this.dataService.getContactById(this.id());
  }

  deleteContact()
  {
    this.dataService.deleteContactById(this.id());
  }


}

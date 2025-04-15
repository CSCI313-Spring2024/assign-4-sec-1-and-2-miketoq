import { Component, OnInit, inject, OnChanges, Input, AfterViewInit} from '@angular/core';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { Contact } from '../contact';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-list',
  imports: [ContactCardComponent, RouterLink],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  dataService = inject(DataService);

  contacts: Contact[] = [];

  ngOnInit() {
    // this.contacts = this.dataService.contacts;
    this.dataService.getContact().subscribe((data) => (this.contacts = data));  

    this.dataService.contactsUpdated.subscribe(() => {
      this.deleteUpdate();
    });
  }

  deleteUpdate()
  {
    this.contacts = this.dataService.contacts;
  }
}

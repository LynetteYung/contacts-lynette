import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  items: FirebaseListObservable<any[]>;

  constructor(
      private contactService: ContactService,
      private af: AngularFire
  ) { }

  ngOnInit() {
    //this.contacts = this.contactService.getContacts();
    this.contactService.getContacts().then(contacts => this.contacts = contacts);

    this.items = this.af.database.list('/contacts');
  }
}

import { Injectable } from '@angular/core';
import { Contact } from './contact';
@Injectable()
export class ContactService {

  contacts:  Contact[] = [
    {"name":"zena", "lastName":"z", id: 1},
    {"name":"Yello", "lastName":"y", id: 2},
    {"name":"XRay", "lastName":"x", id: 3},
    {"name":"Weare", "lastName":"w", id: 4},
    {"name":"Victor", "lastName":"v", id: 5},
    {"name":"Ulysses", "lastName":"u", id: 6},
    {"name":"Thomas", "lastName":"t", id: 7}
  ];
  getContacts(): Promise<Contact[]>{
    return Promise.resolve(this.contacts);
  };
  getContact(id:Number): Promise<Contact> {
    return this.getContacts().then(contacts => contacts.find(contact => contact.id === id));
  }
  constructor() { }

}

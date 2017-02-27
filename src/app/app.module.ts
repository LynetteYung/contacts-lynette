import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppAboutComponent } from './app-about/app-about.component';
import { ContactService } from './contact.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FirebaseAuthKey } from './firebase-auth-key';

export const firebaseConfig = {
  FirebaseAuthKey: FirebaseAuthKey

};

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AppAboutComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseAuthKey),
    MaterialModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

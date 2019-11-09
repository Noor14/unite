import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    SidebarComponent,
    ContactsComponent,
    MessagesComponent,
    SettingsComponent,
    ChatsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    UserRoutingModule
  ]
})
export class UserModule { }

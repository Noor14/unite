import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { ChatsComponent } from './chats/chats.component';
import { ConversationComponent } from '../../shared/conversation/conversation.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { InfoComponent } from '../../shared/info/info.component';
import { RemindersComponent } from './reminders/reminders.component';
import { SchedulersComponent } from './schedulers/schedulers.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  // suppressScrollX: true
};
@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    SidebarComponent,
    ConversationComponent,
    ContactsComponent,
    MessagesComponent,
    SettingsComponent,
    ChatsComponent,
    DeleteDialogComponent,
    InfoComponent,
    RemindersComponent,
    SchedulersComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    UserRoutingModule,
    PerfectScrollbarModule
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }]
})
export class UserModule { }

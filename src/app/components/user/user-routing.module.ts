import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user.component';
import { RemindersComponent } from './reminders/reminders.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import { CallsComponent } from './calls/calls.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AdvertiserComponent } from './advertiser/advertiser.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    // pathMatch: 'full',
    children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'advertisers', component: AdvertiserComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'calls', component: CallsComponent },
    { path: 'reminders', component: RemindersComponent },
    { path: 'schedulers', component: SchedulersComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

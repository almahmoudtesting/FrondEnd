import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {RegisterComponent} from './register/register.component';
import { OrganizerComponent } from './register/organizerreg/organizer.component';
import { UserregComponent } from './register/userreg/userreg.component';
import { LoginComponent } from 'src/app/login/login.component';
import {UservicesComponent} from './user/uservices/uservices.component';
import {EventComponent} from './event/event.component';
import {EventdetailsComponent} from './event/eventdetails.component';
import {EservicesComponent} from './event/eservices/eservices.component';
import {CreateventComponent} from './event/createvent/createvent.component';
import {AuthGuard} from './Authentication/auth.guard';
import {MyprofileComponent} from './myprofile/myprofile.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'home', component: AppComponent},
  {path: 'users', component: UserComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN'}},
  // {path: 'user/:id', component: UserComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'orgnizerreg', component: OrganizerComponent},
  {path: 'userreg', component: UserregComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users/user/:userid' , component: UservicesComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN'}},
  {path: 'events', component: EventComponent, canActivate: [AuthGuard]},
 // {path: 'events/event/:eventid' , component: EventComponent},
  {path: 'createvent' , component: CreateventComponent},
  {path: 'events/event/:eventid', component: EservicesComponent },
  {path: 'events/eventt/:eventid', component: EventdetailsComponent},
  {path: 'myprofile', component: MyprofileComponent, canActivate: [AuthGuard]},
  {path: 'myprofile/user/:userid', component: UservicesComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


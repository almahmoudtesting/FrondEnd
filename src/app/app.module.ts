import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainComponent} from './MainComponent';
import { UserComponent } from './user/user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrganizerComponent } from './register/organizerreg/organizer.component';
import { UserregComponent } from './register/userreg/userreg.component';
import { LoginComponent } from './login/login.component';
import { UservicesComponent } from './user/uservices/uservices.component';
import { UserdetailsComponent } from './user/userdetails.component';
import { EventComponent } from './event/event.component';
import { EventdetailsComponent } from './event/eventdetails.component';
import { EservicesComponent } from './event/eservices/eservices.component';
import { CreateventComponent } from './event/createvent/createvent.component';
import { TicketComponent } from './ticket/ticket.component';
import {BasicAuthInterceptor} from './Authentication/basic-auth.interceptor';
import {ErrorInterceptor} from './Authentication/error.interceptor';

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    UserComponent,
    RegisterComponent,
    OrganizerComponent,
    UserregComponent,
    LoginComponent,
    UservicesComponent,
    UserdetailsComponent,
    EventComponent,
    EventdetailsComponent,
    EservicesComponent,
    CreateventComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }

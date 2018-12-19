import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainComponent} from './MainComponent';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrganizerComponent } from './register/organizerreg/organizer.component';
import { UserregComponent } from './register/userreg/userreg.component';
import { LoginComponent } from './login/login.component';
import { UservicesComponent } from './user/uservices/uservices.component';
import { UserdetailsComponent } from './user/userdetails.component';
import { EventComponent } from './event/event.component';

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
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }

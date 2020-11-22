import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewRequestComponent } from './components/new-request/new-request.component';
import { NewRequestItemComponent } from './components/new-request/new-request-item/new-request-item.component';
import { NewUserItemComponent } from './components/new-user/new-user-item/new-user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewRequestComponent,
    NewRequestItemComponent,
    NewUserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

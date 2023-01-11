import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConnexionComponent } from './connexion/connexion.component';
import { IncriptionComponent } from './incription/incription.component';
import { DashCliComponent } from './dash-cli/dash-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    IncriptionComponent,
    DashCliComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

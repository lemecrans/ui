import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashCliComponent } from './dash-cli/dash-cli.component';

const routes: Routes = [
  { path:'login', component:ConnexionComponent },
  { path:'dash',component:DashCliComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

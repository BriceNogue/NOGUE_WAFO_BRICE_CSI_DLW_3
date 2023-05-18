import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonneComponent } from './components/abonne/abonne.component';
import { AddAbonneComponent } from './components/add-abonne/add-abonne.component';

const routes: Routes = [
  { path: "", redirectTo: "abonnes", pathMatch: 'full' },
  { path: "abonnes", component: AbonneComponent },
  { path: "add_abonne", component: AddAbonneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadrecomicsComponent } from './components/padrecomics/padrecomics.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"comics",component:PadrecomicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

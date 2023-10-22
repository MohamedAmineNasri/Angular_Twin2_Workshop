import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './user/components/list-user/list-user.component';
import { AccountsComponent } from './user/components/accounts/accounts.component';
import { SliderComponent } from './slider/slider.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  //redirectTo yhzik
  //b pathMatch ki yabda 7atit / barka y7otha /home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SliderComponent },
  //Lazy Loading
  {path:'mainuser', loadChildren: ()=> import('./user/user.module').then(m=>m.UserModule)},
  // we always put it in the last line because if we put it before others it will ignore what come after it so order is important
  { path: '**', component: NotFoundComponent },
  // { path: 'users', component: ListUserComponent }, //it have the impot to search for users
];
//router link (remplacer href) => directive
//router-outlet =>directive
//Module de routage where we declare the routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

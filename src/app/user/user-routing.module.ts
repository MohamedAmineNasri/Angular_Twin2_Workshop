import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ListUserComponent } from './components/list-user/list-user.component';

const routes: Routes = [
    {path: '',component: AccountsComponent,children: [
      //child root:
      { path: 'users/:category', component: ListUserComponent, children: [] }, //:category means parameter by using (:)
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

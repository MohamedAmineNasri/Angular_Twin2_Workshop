import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AccountsComponent } from './user/components/accounts/accounts.component';
import { FooterComponent } from './footer/footer.component';
import { ListUserComponent } from './user/components/list-user/list-user.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    //TestComponent,
    HeaderComponent,
    SliderComponent,
    //AccountsComponent,
    FooterComponent,
    //ListUserComponent,
    NotFoundComponent,
  ],
  imports: [
    //la liste des modules utiles
    BrowserModule, //ngFor/ngUf
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, TestComponent],
})
export class AppModule {}

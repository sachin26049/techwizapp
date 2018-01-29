import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {MenusService} from './services/menus.service';
import { AuthGuard } from './guards/auth.guard';
import { OrdersComponent } from './services/orders/orders.component';

const appRoutes: Routes = [
  {path: '' , component: HomepageComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    MenuComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatTabsModule,
    MatExpansionModule
    ],
  providers: [ValidateService, AuthService, AuthGuard,MenusService],
  bootstrap: [AppComponent]
})
export class AppModule { }

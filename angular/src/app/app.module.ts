import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './guards/auth.guard';

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
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatTabsModule
    ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

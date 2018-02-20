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
import {NgcFloatButtonModule} from 'ngc-float-button';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


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
import { OrdersComponent } from './orders/orders.component';

import { AdminComponent } from './admin/admin.component';
import { ManagemenuComponent } from './managemenu/managemenu.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { ModifyfoodComponent } from './modifyfood/modifyfood.component';
import { DeletefoodComponent } from './deletefood/deletefood.component';
import { DeletetypeComponent } from './deletetype/deletetype.component';
import { AddtypeComponent } from './addtype/addtype.component';
import { ModifytypeComponent } from './modifytype/modifytype.component';
import { AdminmenuService } from './services/adminmenu.service';

import {OrdersService} from './services/orders.service';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { OrderSocketService } from './services/order-socket.service';
import { ChefComponent } from './chef/chef.component';
import { ChefSocketService } from './chef/chef-socket.service';
import { ChefsService } from './chef/chefs.service';
import { PaymentComponent } from './payment/payment.component';

const appRoutes: Routes = [
  {path: '' , component: HomepageComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},

  {path: 'admin' , component: AdminComponent},
  {path: 'managemenu' , component: ManagemenuComponent},
  {path: 'addfood' , component: AddfoodComponent},
  {path: 'modifyfood' , component: ModifyfoodComponent},
  {path: 'deletefood' , component: DeletefoodComponent},
  {path: 'deletetype' , component: DeletetypeComponent},
  {path: 'addtype' , component: AddtypeComponent},
  {path: 'modifytype' , component: ModifytypeComponent},
  {path: 'viewfeedback' , component: ViewfeedbackComponent},
  {path:'chef', component:ChefComponent},
  {path:'OrderStatus', component: OrderstatusComponent, canActivate: [AuthGuard]},
  {path: 'payment', component: PaymentComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    MenuComponent,
    OrdersComponent,

    AdminComponent,
    ManagemenuComponent,
    ViewfeedbackComponent,
    AddfoodComponent,
    ModifyfoodComponent,
    DeletefoodComponent,
    DeletetypeComponent,
    AddtypeComponent,
    ModifytypeComponent,

    OrderstatusComponent,

    ChefComponent,

    PaymentComponent,


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
    MatExpansionModule,
      NgcFloatButtonModule,
      SocketIoModule.forRoot(config) 
    ],


  providers: [ValidateService, AuthService,ChefsService, AuthGuard,ChefSocketService,MenusService,OrdersService,OrderSocketService,AdminmenuService],

  bootstrap: [AppComponent]
})
export class AppModule { }

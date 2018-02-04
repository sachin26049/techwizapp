import { Component, OnInit } from '@angular/core';
import {MenusService} from '../services/menus.service';
import {Router} from '@angular/router';
import { log } from 'util';
import {AuthService} from '../services/auth.service';
import {OrdersService} from '../services/orders.service'
@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {
  Menu:[any];
  Count:[Number];
  constructor(private MS: MenusService,private router:Router,
    private AS:AuthService,private OS:OrdersService) { }

  ngOnInit() {
    this.Menu=this.MS.getMenu();

    this.Count=this.OS.getCurrentCount();
    console.log(this.Count);
    console.log(this.Menu);

  }

}

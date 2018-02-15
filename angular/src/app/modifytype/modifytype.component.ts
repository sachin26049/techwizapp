import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';


@Component({
  selector: 'app-modifytype',
  templateUrl: './modifytype.component.html',
  styleUrls: ['./modifytype.component.css']
})
export class ModifytypeComponent implements OnInit {
type: String;new: String;
  constructor() { }

  ngOnInit() {
  }

}

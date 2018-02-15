import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deletetype',
  templateUrl: './deletetype.component.html',
  styleUrls: ['./deletetype.component.css']
})
export class DeletetypeComponent implements OnInit {
type: String;
  constructor() { }

  ngOnInit() {
  }

}

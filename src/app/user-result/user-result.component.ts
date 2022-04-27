import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { GituserServiceService } from '../gituser-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.css']
})
export class UserResultComponent implements OnInit {
  user:User;
  repoDetails = [];
  gituserServiceService:GituserServiceService;
  hideInput:boolean;


  constructor(gituserServiceService:GituserServiceService) { 
    this.gituserServiceService = gituserServiceService;

  }
  @Output () toggleBack = new EventEmitter();

  goBack(){
    this.hideInput = true
    this.toggleBack.emit(this.hideInput);

  }


  ngOnInit(){
    this.user = this.gituserServiceService.user;
    this.repoDetails = this.gituserServiceService.repoData;   
  }

}
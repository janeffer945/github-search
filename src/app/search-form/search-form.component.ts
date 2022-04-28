import { Component, OnInit} from '@angular/core';
import { GituserServiceService } from '../gituser-service/service.service';
import { User } from '../user';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  user:User;
  username:string;
  gitUserServiceService:GituserServiceService;
  public showInput = true;
  public showData = false;

  submitUsername(){
    this.gitUserServiceService.getUserData(this.username);
    this.showInput = true;
    this.showData = false;
  }

  showUserInput(hideInput: any){
    this.showInput = hideInput;
    this.showData = false;
  }
  


  constructor(gitUserServiceService:GituserServiceService) { 
    this.gitUserServiceService = gitUserServiceService;
  }

  ngOnInit(){
  }

}
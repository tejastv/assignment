import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiCallService } from 'src/app/services/api-call.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userObj:any = {};
  imgUsr;

  constructor(
    private domSanitizer: DomSanitizer,
    private apiCall: ApiCallService
  ) { 
  }

  getUser(){
    this.apiCall.getData('users/2').subscribe(res => {
      this.userObj = res;
    })
  }

  ngOnInit(): void {
    this.getUser();
  }
}

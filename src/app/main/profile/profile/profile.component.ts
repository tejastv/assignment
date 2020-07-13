import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userObj;
  imgUsr;

  constructor(
    private domSanitizer: DomSanitizer
  ) { 
  }

  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('userData'));
    if(data){
      this.userObj = data;
      // this.imgUsr = 'data:image/jpeg;base64,' + data.propic;
      this.imgUsr = this.domSanitizer.bypassSecurityTrustUrl(data.propic);
    }
  }

}

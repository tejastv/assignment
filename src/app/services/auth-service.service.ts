import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiCallService } from './api-call.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  returnUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private apiCall: ApiCallService
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/user';
  }


  login(value) {
    this.apiCall.postData(value, 'login').subscribe(res => {
      localStorage.setItem('mockData', JSON.stringify(res.token));
      this.router.navigate([this.returnUrl]);
    }, err => {
      alert(err.error.error)
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/signin']);
  }
}

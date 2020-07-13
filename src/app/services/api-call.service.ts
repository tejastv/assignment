import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(
    private http: HttpClient
  ) { }

  postData(payload, requrl): Observable<any> {
    return this.http.post<any>(environment.baseUrl + requrl, payload);
  }

  getData(requrl) {
    return this.http.get<any>(environment.baseUrl + requrl);
  }

  getDataWithUrl(url) {
    return this.http.get<any>(url);
  }

  getDataWithParams(obj, requrl) {
    return this.http.get<any>(requrl, { params: obj });
  }
}

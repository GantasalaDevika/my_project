import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../common/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl: string = "http://localhost:8181/myapp/admin";

  constructor(private http: HttpClient) { }

  getAdmin(data: Admin): Observable<any> {
    return this.http.post(this.baseUrl + '/valid', data)
  }
}

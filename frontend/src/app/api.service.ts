import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }
  rootURL = 'http://localhost:3600/api';
  url = "http://localhost:3600/api/users";

  getUsers() {
    return this.http.get(this.url);
  }
  

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', {user})
  }


}

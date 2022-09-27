import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  //private apiUrl = 'https://postpred.herokuapp.com';
  private apiUrl = 'http://localhost:5000/';
  getAllUsers() {
    return this.http.get(this.apiUrl + 'auth/getAllUsers');
  }
  getAllPosts() {
    return this.http.get(this.apiUrl + 'posts/getAllPosts');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ResponseJson } from '../models/response-json';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ResponseJson>(environment.userServiceUrl);
  }

  get(id: number) {
    return this.http.get<ResponseJson>(`${environment.userServiceUrl}/${id}`);
  }

  create(user: User) {
    return this.http.post<ResponseJson>(environment.userServiceUrl, user);
  }

  update(id: number, user: User) {
    return this.http.put<ResponseJson>(`${environment.userServiceUrl}/${id}`, user);
  }

  delete(id: number) {
    return this.http.delete<ResponseJson>(`${environment.userServiceUrl}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ResponseJson } from '../models/response-json';
import { User } from '../models/user';
import { Util } from '../util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return Util.toPromise(this.http.get<ResponseJson>(environment.userServiceUrl), true);
  }

  get(id: number) {
    return Util.toPromise(this.http.get<ResponseJson>(`${environment.userServiceUrl}/${id}`));
  }

  create(user: User) {
    return Util.toPromise(this.http.post<ResponseJson>(environment.userServiceUrl, user));
  }

  update(id: number, user: User) {
    return Util.toPromise(this.http.put<ResponseJson>(`${environment.userServiceUrl}/${id}`, user));
  }

  delete(id: number) {
    return Util.toPromise(this.http.delete<ResponseJson>(`${environment.userServiceUrl}/${id}`));
  }
}

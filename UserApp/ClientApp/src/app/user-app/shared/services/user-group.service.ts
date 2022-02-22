import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ResponseJson } from '../models/response-json';
import { UserGroup } from '../models/user-group';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ResponseJson>(environment.userGroupServiceUrl);
  }

  get(id: number) {
    return this.http.get<ResponseJson>(`${environment.userGroupServiceUrl}/${id}`);
  }

  create(userGroup: UserGroup) {
    return this.http.post<ResponseJson>(environment.userGroupServiceUrl, userGroup);
  }

  update(id: number, userGroup: UserGroup) {
    return this.http.put<ResponseJson>(`${environment.userGroupServiceUrl}/${id}`, userGroup);
  }

  delete(id: number) {
    return this.http.delete<ResponseJson>(`${environment.userGroupServiceUrl}/${id}`);
  }
}

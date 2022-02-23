import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ResponseJson } from '../models/response-json';
import { UserGroup } from '../models/user-group';
import { Util } from '../util';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {

  constructor(private http: HttpClient) { }

  getAll() {
    return Util.toPromise(this.http.get<ResponseJson>(environment.userGroupServiceUrl), true);
  }

  get(id: number) {
    return Util.toPromise(this.http.get<ResponseJson>(`${environment.userGroupServiceUrl}/${id}`));
  }

  create(userGroup: UserGroup) {
    return Util.toPromise(this.http.post<ResponseJson>(environment.userGroupServiceUrl, userGroup));
  }

  update(id: number, userGroup: UserGroup) {
    return Util.toPromise(this.http.put<ResponseJson>(`${environment.userGroupServiceUrl}/${id}`, userGroup));
  }

  delete(id: number) {
    return Util.toPromise(this.http.delete<ResponseJson>(`${environment.userGroupServiceUrl}/${id}`));
  }
}

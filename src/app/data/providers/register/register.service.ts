import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { END_POINTS, environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as ServiceConst from '../../../portal/utils/ConstantsService';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private neoredUrl: string = environment.validadorNeored;

  constructor(private http: HttpClient) {}

  getValidateEmail(email: string): Observable<any> {
    return this.http.get( this.neoredUrl + END_POINTS.GET_VALIDATE_EMAIL_FORMAT , {
      headers: ServiceConst.PRINCIPAL_HEADER,
      params: { email },
    });
  }

  getValidatePhoneNumber(telefono: string): Observable<any> {
    return this.http.get( this.neoredUrl + END_POINTS.GET_VALIDATE_PHONE_FORMAT , {
      headers: ServiceConst.PRINCIPAL_HEADER,
      params: { telefono },
    });
  }

}

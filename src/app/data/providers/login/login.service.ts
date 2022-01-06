import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { END_POINTS, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  postValidateEmail(email: string): Observable<string> {
    return this.http.post<string>(this.baseUrl + END_POINTS.POST_VALIDATE_EMAIL, email);
  }
}

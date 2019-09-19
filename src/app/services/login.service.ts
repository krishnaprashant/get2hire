import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  url = "http://api.get2hire.com/api/user/login";
  fetchUrl = "http://api.get2hire.com/api/applicant-details";
  constructor(private httpClient: HttpClient) {}

  login(data: any) {
    return this.httpClient.post<any>(this.url, data).pipe(
      map(data => {
        return data;
      })
    );
  }

  FetchUserDetails(data: any) {
    return this.httpClient.post<any>(this.fetchUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }
}

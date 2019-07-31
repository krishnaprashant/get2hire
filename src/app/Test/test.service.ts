import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TestService {
  apiUrl = "http://localhost/get2hire_laravel/api/register";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  makeReq(data: any) {
    return this.http.post(this.apiUrl, data, this.httpOptions);
  }
}

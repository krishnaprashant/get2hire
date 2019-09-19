import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Register } from "../Model/register.model";
import { map } from "rxjs/operators";
import { RegisterEmployer } from "../Model/Register-employer.model";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  url = "http://api.get2hire.com/api/register";
  url2 = "http://api.get2hire.com/api/register-employer";

  // httpOptions = {
  //   headers: new HttpHeaders({ "Content-type": "application/json" })
  // };

  constructor(private httpClient: HttpClient) {}

  GetRegister(registser: Register) {
    return this.httpClient.post<any>(this.url, registser).pipe(
      map(data => {
        return data;
      })
    );
  }
  GetRegisterEmployer(registser: RegisterEmployer) {
    return this.httpClient.post<any>(this.url2, registser).pipe(
      map(data => {
        return data;
      })
    );
  }
}

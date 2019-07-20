import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Register } from "../Model/register.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  url = "http://localhost/get2hire_laravel/api/register";

  httpOptions = {
    headers: new HttpHeaders({ "Content-type": "application/json" })
  };

  constructor(private httpClient: HttpClient) {}

  GetRegister(registser: Register) {
    return this.httpClient
      .post<any>(this.url, registser, this.httpOptions)
      .pipe(
        map(data => {
          console.log("service response: " + data);
          return data;
        })
      );
  }
}

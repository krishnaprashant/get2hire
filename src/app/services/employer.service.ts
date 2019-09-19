import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EmployerService {
  getAllUrl = "http://api.get2hire.com/api/employer";

  postJobUrl = "http://api.get2hire.com/api/post-job";

  constructor(private httpClient: HttpClient) {}

  getAll(data: any) {
    return this.httpClient.post<any>(this.getAllUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }

  postJob(data: any) {
    return this.httpClient.post<any>(this.postJobUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }
}

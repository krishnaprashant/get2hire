import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class JobsService {
  url = "http://api.get2hire.com/api/search-results";
  url_2 = "http://api.get2hire.com/api/jobs-applied";
  url_3 = "http://api.get2hire.com/api/apply-job";

  constructor(private httpClient: HttpClient) {}

  getJobResults(data: any) {
    return this.httpClient.post<any>(this.url, data).pipe(
      map(data => {
        return data;
      })
    );
  }
  getAppliedJobs(data: any) {
    return this.httpClient.post<any>(this.url_2, data).pipe(
      map(data => {
        return data;
      })
    );
  }

  applyToJob(data: any) {
    return this.httpClient.post<any>(this.url_3, data).pipe(
      map(data => {
        return data;
      })
    );
  }
}

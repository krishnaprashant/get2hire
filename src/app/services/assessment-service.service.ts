import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AssessmentServiceService {
  url = "http://api.get2hire.com/api/add-assessment";
  url_2 = "http://api.get2hire.com/api/get-assessments";
  url_3 = "http://api.get2hire.com/api/delete-question";

  constructor(private httpClient: HttpClient) {}

  AddAssessment(data: any) {
    return this.httpClient.post<any>(this.url, data).pipe(
      map(data => {
        return data;
      })
    );
  }
  GetAssessments() {
    return this.httpClient.get(this.url_2).pipe(
      map(data => {
        return data;
      })
    );
  }
  DeleteQustion(data: any) {
    return this.httpClient.post<any>(this.url_3, data).pipe(
      map(data => {
        return data;
      })
    );
  }
}

import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpEventType,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FileUploadService {
  apiUrl = "http://api.get2hire.com/api/upload-pic";

  constructor(private httpClient: HttpClient) {}

  upload(formData) {
    return this.httpClient
      .post(`${this.apiUrl}`, formData, {
        reportProgress: true,
        observe: "events"
      })
      .pipe(
        map(event => this.getEventMessage(event, formData)),
        catchError(this.handleError)
      );
  }

  private getEventMessage(event: HttpEvent<any>, formData) {
    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
      case HttpEventType.Response:
        return this.apiResponse(event);
      default:
        return `File "${
          formData.get("profile").name
        }" surprising upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event) {
    const percentDone = Math.round((100 * event.loaded) / event.total);
    return { status: "progress", message: percentDone };
  }

  private apiResponse(event) {
    return event.body;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened. Please try again later.");
  }
}

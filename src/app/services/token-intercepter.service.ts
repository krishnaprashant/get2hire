import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TokenIntercepterService implements HttpInterceptor {
  intercept(
    req: import("@angular/common/http").HttpRequest<any>,
    next: import("@angular/common/http").HttpHandler
  ): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    let TokenizedReq = req.clone({
      setHeaders: {
        "App-Key": "ABCDEFGHIJK"
      }
    });
    return next.handle(TokenizedReq);
  }

  constructor() {}
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "get2hire";
  public path;

  constructor(router: Router) {
    this.path = window.location.href;
    this.path = this.path.replace(window.location.origin, "");
  }
}

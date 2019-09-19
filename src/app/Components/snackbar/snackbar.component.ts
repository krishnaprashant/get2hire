import { Component, OnInit, Input } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { Observable } from "rxjs";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.css"]
})
export class SnackbarComponent implements OnInit {
  Toast: boolean = false;
  private subscription: Subscription;
  private timer: Observable<any>;

  @Input()
  message: string;
  constructor() {}

  ngOnInit() {
    this.setTimer();
  }

  public setTimer() {
    // set showloader to true to show loading div on view
    this.Toast = true;

    this.timer = timer(5000); // 5000 millisecond means 5 seconds
    this.subscription = this.timer.subscribe(() => {
      // set Toast to false to hide loading div from view after 5 seconds
      this.Toast = false;
    });
  }
}

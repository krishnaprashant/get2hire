import { Component, OnInit } from "@angular/core";
import { TestService } from "../test.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  constructor(private testService: TestService) {}

  data = {
    name: "Prashant",
    email: "prashantkrishna5@gmail.com",
    password: "1234"
  };

  ngOnInit() {}

  makeRequest() {
    this.testService
      .makeReq(this.data)
      .pipe(first())
      .subscribe(data => {
        console.log(data);
      });
  }
}

import { Component, OnInit } from "@angular/core";
import { AssessmentServiceService } from "src/app/services/assessment-service.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-show-assessments",
  templateUrl: "./show-assessments.component.html",
  styleUrls: ["./show-assessments.component.css"]
})
export class ShowAssessmentsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

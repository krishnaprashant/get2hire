import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-job-results",
  templateUrl: "./job-results.component.html",
  styleUrls: ["./job-results.component.css"]
})
export class JobResultsComponent implements OnInit {
  keyword: string;
  skill: string;
  location: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.keyword = this.route.snapshot.paramMap.get("keyword");
    this.location = this.route.snapshot.paramMap.get("location");
  }
}

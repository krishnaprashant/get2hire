import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { JobsService } from "src/app/services/jobs.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-job-results",
  templateUrl: "./job-results.component.html",
  styleUrls: ["./job-results.component.css"]
})
export class JobResultsComponent implements OnInit {
  keyword: string;
  skill: string;
  location: string;

  loader: boolean = false;
  loading_message: string;

  ResultResponse: any;
  jobs_applied: Array<string> = [];

  constructor(private jobService: JobsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.keyword = this.route.snapshot.paramMap.get("keyword");
    this.location = this.route.snapshot.paramMap.get("location");
    this.getResults(this.keyword, this.location);
    this.getAppliedJobs();
    console.log(this.timeAgo("2019-09-01 17:05:00"));
  }

  getResults(skills, city) {
    this.loader = true;
    this.loading_message = "Fetching Detals";
    let data = {
      skills: skills,
      city: city
    };
    this.jobService
      .getJobResults(data)
      .pipe(first())
      .subscribe(data => {
        this.ResultResponse = data;
        this.loader = false;
      });
  }
  ApplyToJob(id) {
    this.loader = true;
    this.loading_message = "Applying Job";
    let data = {
      email: sessionStorage.getItem("applicant"),
      job_id: id
    };
    this.jobService
      .applyToJob(data)
      .pipe(first())
      .subscribe(data => {
        this.loader = false;
        if (data) {
          this.getAppliedJobs();
        }
      });
  }

  getAppliedJobs() {
    this.loader = true;
    this.loading_message = "Fetching Detals";
    let data = {
      email: sessionStorage.getItem("applicant")
    };
    this.jobService
      .getAppliedJobs(data)
      .pipe(first())
      .subscribe(data => {
        this.loader = false;
        this.getDataIntoArray(data);
      });
  }

  getDataIntoArray(arr) {
    if (arr.length > 0) {
      arr.forEach(element => {
        this.jobs_applied.push(element.job_id);
      });
    }
  }

  disableEnable(id) {
    status = this.AppliedOrNotApplied(id);
    if (status == "Apply") {
      return false;
    } else {
      return true;
    }
  }

  AppliedOrNotApplied(id): string {
    let data = this.jobs_applied.find(ob => ob === "" + id);

    if (data === undefined) {
      return "Apply";
    } else {
      return "Applied";
    }
  }

  LoggedIn() {
    if (sessionStorage.getItem("applicant") !== null) {
      return true;
    } else {
      return false;
    }
  }
  AskLogin(e) {
    e.target.textContent = "Please login";
  }
  timeAgo(datetime) {
    var diff = Math.abs(
      new Date().getTime() - new Date(datetime.replace(/-/g, "/")).getTime()
    );
    var min = diff / (1000 * 60);
    var hour = diff / (1000 * 60 * 60);
    var day = diff / (1000 * 60 * 60 * 24);
    var week = diff / (1000 * 60 * 60 * 24 * 7);
    var month = diff / (1000 * 60 * 60 * 24 * 30);
    var year = diff / (1000 * 60 * 60 * 24 * 365);
    if (min < 1) {
      return "just now";
    } else if (min < 2) {
      return "a min ago";
    } else if (min > 2 && min < 60) {
      return Math.ceil(min) + " minutes ago";
    } else if (hour < 2) {
      return "an hour ago";
    } else if (hour > 2 && hour < 24) {
      return Math.ceil(hour) + " hours ago";
    } else if (day < 2) {
      return "a day ago";
    } else if (day > 2 && day < 7) {
      return Math.ceil(day) + " days ago";
    } else if (week < 2) {
      return "a week ago";
    } else if (week > 2 && week < 4) {
      return Math.ceil(week) + " weeks ago";
    } else if (month < 2) {
      return "a month ago";
    } else if (month > 2 && month < 12) {
      return Math.ceil(month) + " months ago";
    } else if (year < 2) {
      return "a year ago";
    } else if (year > 2) {
      return Math.ceil(year) + " years ago";
    }
  }
}

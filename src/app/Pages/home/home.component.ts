import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  SearchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.SearchForm = this.formBuilder.group({
      keywords: [""],
      location: [""],
      skills: [""]
    });
  }

  get f() {
    return this.SearchForm.controls;
  }

  onClickSearch() {
    let keyword = (<HTMLInputElement>document.getElementById("keyword")).value;
    let location = (<HTMLInputElement>document.getElementById("location"))
      .value;
    let skill = (<HTMLInputElement>document.getElementById("skills")).value;
    window.location.href =
      "/job-results/" + keyword + "/" + location + "/" + skill;
  }
}

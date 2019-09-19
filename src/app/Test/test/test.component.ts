import { Component, OnInit } from "@angular/core";
import { TestService } from "../test.service";
import { first } from "rxjs/operators";
import { FileUploadService } from "src/app/services/file-upload.service";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { UploadService } from "src/app/services/upload.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  TestFrom: FormGroup;
  myGroup: FormGroup;
  picName: string;

  fileUpload = { status: "", message: "", filepath: "" };

  get f() {
    return this.TestFrom.controls;
  }
  data = {
    name: "Prashant",
    email: "prashantkrishna5@gmail.com",
    password: "1234"
  };

  constructor(
    private formBuilder: FormBuilder,
    private testService: TestService,
    private uploadService: UploadService
  ) {}

  ngOnInit() {
    this.TestFrom = this.formBuilder.group({
      test: ["", Validators.compose([Validators.required])],
      profilePic: ["", Validators.compose([Validators.required])]
    });
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const profile = event.target.files[0];
      this.TestFrom.get("profilePic").setValue(profile);
      console.log(event.target.files);
      let r = Math.random()
        .toString(36)
        .substring(7);
      this.picName = r + profile.name;
      console.log(this.picName);
    }
  }

  makeRequest(e) {
    const formData = new FormData();
    formData.append("picName", this.picName);
    formData.append("profile", this.TestFrom.get("profilePic").value);
    this.uploadService
      .uploadLogo(formData)
      .subscribe(res => (this.fileUpload = res));
    this.testService
      .makeReq(this.data)
      .pipe(first())
      .subscribe(data => {
        console.log(data);
      });
  }
}

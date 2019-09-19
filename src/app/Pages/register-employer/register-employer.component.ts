import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { RegisterEmployer } from "src/app/Model/Register-employer.model";
import { RegisterService } from "src/app/services/register.service";
import { first } from "rxjs/operators";
import { UploadService } from "src/app/services/upload.service";

@Component({
  selector: "app-register-employer",
  templateUrl: "./register-employer.component.html",
  styleUrls: ["./register-employer.component.css"]
})
export class RegisterEmployerComponent implements OnInit {
  RegisterForm: FormGroup;
  register: RegisterEmployer;
  isSubmitted: boolean = false;
  successResponse: boolean = false;
  picName: string;

  HaveRegistered: boolean;

  response: any;

  get f() {
    return this.RegisterForm.controls;
  }
  constructor(
    private uploadService: UploadService,
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({
      name: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      phone: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(
            /^(\+?(\d{1}|\d{2}|\d{3})[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/
          )
        ])
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
          )
        ])
      ],
      prefferedLocation: ["", Validators.compose([Validators.required])],
      company: ["", Validators.compose([Validators.required])],
      experience: ["", Validators.compose([Validators.required])],
      sourcing: ["", Validators.compose([Validators.required])],
      package: ["", Validators.compose([Validators.required])],

      gender: ["", Validators.compose([Validators.required])],
      logo: ["", Validators.compose([Validators.required])]
    });
  }
  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const profile = event.target.files[0];
      this.RegisterForm.get("logo").setValue(profile);
      let r = Math.random()
        .toString(36)
        .substring(7);
      this.picName = r + profile.name;
      console.log(this.picName);
    }
  }

  onSubmit(e) {
    this.isSubmitted = true;
    if (this.RegisterForm.valid) {
      const formData = new FormData();
      this.register = new RegisterEmployer();
      this.register.name = this.f.name.value;
      this.register.email = this.f.email.value;
      this.register.phone = this.f.phone.value;
      this.register.password = this.f.password.value;
      this.register.job_location = this.f.prefferedLocation.value;
      this.register.company_name = this.f.company.value;
      this.register.sourcing_for = this.f.sourcing.value;
      this.register.package = this.f.package.value;
      this.register.experience = this.f.experience.value;
      this.register.gender = this.f.gender.value;
      this.register.logo = this.picName;
      this.registerService
        .GetRegisterEmployer(this.register)
        .pipe(first())
        .subscribe(data => {
          this.response = data;
          if (this.response == "Employer is Registered") {
            this.successResponse = true;
            this.HaveRegistered = true;
          }
        });
      formData.append("picName", this.picName);
      formData.append("profile", this.RegisterForm.get("logo").value);
      this.uploadService
        .uploadLogo(formData)
        .subscribe(data => console.log("image response:" + data));
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { RegisterEmployer } from "src/app/Model/Register-employer.model";

@Component({
  selector: "app-register-employer",
  templateUrl: "./register-employer.component.html",
  styleUrls: ["./register-employer.component.css"]
})
export class RegisterEmployerComponent implements OnInit {
  RegisterForm: FormGroup;
  register: RegisterEmployer;
  isSubmitted: boolean = false;
  get f() {
    return this.RegisterForm.controls;
  }
  constructor(private formBuilder: FormBuilder) {}

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

      gender: ["", Validators.compose([Validators.required])]
    });
  }

  onSubmit(e) {
    this.isSubmitted = true;
    if (this.RegisterForm.valid) {
      console.log(e);
      this.register = new RegisterEmployer();
      this.register.name = this.f.name.value;
      this.register.email = this.f.email.value;
      this.register.phone = this.f.phone.value;
      this.register.password = this.f.password.value;
      this.register.prefferedLocation = this.f.prefferedLocation.value;
      this.register.company = this.f.company.value;
      this.register.sourcing = this.f.sourcing.value;
      this.register.package = this.f.package.value;
      this.register.experience = this.f.experience.value;
      this.register.gender = this.f.gender.value;
      // this.registerService
      //   .GetRegister(this.register)
      //   .pipe(first())
      //   .subscribe(data => {
      //     console.log("the component Data:" + data);
      //   });
    }
  }
}

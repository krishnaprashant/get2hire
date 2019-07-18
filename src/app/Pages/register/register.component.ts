import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

import { Register } from "src/app/Model/Register.model";
import { RegisterService } from "src/app/services/register.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  register: Register;
  isSubmitted: boolean = false;

  get f() {
    return this.RegisterForm.controls;
  }

  constructor(
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
      expertise: ["", Validators.compose([Validators.required])],
      experience: ["", Validators.compose([Validators.required])],
      percentage: ["", Validators.compose([Validators.required])],
      qualification: ["", Validators.compose([Validators.required])],
      branch: ["", Validators.compose([Validators.required])],
      passout: ["", Validators.compose([Validators.required])],
      gender: ["", Validators.compose([Validators.required])],
      profilePic: ["", Validators.compose([Validators.required])]
    });
  }

  onSubmit(e) {
    this.isSubmitted = true;
    if (this.RegisterForm.valid) {
      console.log(e);
      this.register = new Register();
      this.register.name = this.f.name.value;
      this.register.email = this.f.email.value;
      this.register.phone = this.f.phone.value;
      this.register.password = this.f.password.value;
      this.register.prefferedLocation = this.f.prefferedLocation.value;
      this.register.expertise = this.f.expertise.value;
      this.register.percentage = this.f.percentage.value;
      this.register.qualification = this.f.qualification.value;
      this.register.branch = this.f.branch.value;
      this.register.passout = this.f.passout.value;
      this.register.profilePic = this.f.profilePic.value;
      this.registerService
        .GetRegister(this.register)
        .pipe(first())
        .subscribe(data => {
          console.log("the component Data:" + data);
        });
    }
  }
}

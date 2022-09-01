import { Component, HostBinding, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      password: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.minLength(8)],
        // nonNullable: true,
      }),
    });

    this.resetF();
  }

  login() {
    const value = this.form.value;
    this.form.patchValue({});
  }

  resetF() {
    this.form.reset();
    console.log(this.form.value);
  }

  // How to use HostBinding in Components
  @HostBinding('class') get class() {
    return 'login';
  }
  @HostBinding('class.box') get hasBox() {
    return true;
  }
}

// Source- https://blog.angular-university.io/angular-typed-forms/

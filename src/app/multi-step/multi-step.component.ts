import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-step',
  templateUrl: './multi-step.component.html',
  styleUrls: ['./multi-step.component.css'],
})
export class MultiStepComponent implements OnInit {
  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  educational_step = false;
  fetch_form_data_step = false;
  step = 1;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.personalDetails = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
    this.addressDetails = this.fb.group({
      city: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required],
    });
    this.educationalDetails = this.fb.group({
      highest_qualification: ['', Validators.required],
      university: ['', Validators.required],
      total_marks: ['', Validators.required],
    });
  }

  get personal() {
    return this.personalDetails.controls;
  }
  get address() {
    return this.addressDetails.controls;
  }
  get education() {
    return this.educationalDetails.controls;
  }

  next() {
    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) {
        return;
      }
      this.step++;
    }

    if (this.step == 2) {
      this.address_step = true;
      if (this.addressDetails.invalid) {
        return;
      }
      this.step++;
    }
  }

  previous() {
    this.step--;

    if (this.step == 1) {
      this.personal_step = false;
    }
    if (this.step == 2) {
      this.educational_step = false;
    }
  }

  submit() {
    if (this.step == 3) {
      this.educational_step = true;
      if (this.educationalDetails.invalid) {
        return;
      } else {
        this.fetch_form_data_step = true;
      }
    }
  }
}

// Sources:-https://phpforever.com/angular/multi-step-form-in-angular/
// You can also try this:- https://upmostly.com/angular/

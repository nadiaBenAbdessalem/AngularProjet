import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {RegisterService} from '../services/register.service';
import {first} from 'rxjs/internal/operators';
import {AlertService} from '../services/alert.service';
import {pipe} from 'rxjs';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  firstname;
  lastname;
  username;
  password;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private registerService: RegisterService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.registerService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
      //    this.alertService.success('Registration successful', true);
          console.log('credencials register component ' + this.registerForm.value);
          console.log(data);
          this.router.navigate(['/login']);
        },
        error => {
       //   this.alertService.error(error);
          this.loading = false;
        });
  }
}

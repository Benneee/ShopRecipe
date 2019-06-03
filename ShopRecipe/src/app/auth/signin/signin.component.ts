import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

declare var gtag;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  sendEvent() {
    gtag('event', 'log_in', {
      event_category: 'authentication',
      event_label: 'user signed in',
      event_action: 'user signed in',
      event_value: 1
    });
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }
}

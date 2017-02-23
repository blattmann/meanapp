import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required fields
    if(!this.validateService.validateRegister(user)) {
      let msg = 'Please fill in all fields.';
      this.flashMessage.show(msg, {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      let msg = 'Please provide a valid email address.';
      this.flashMessage.show(msg, {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        let msg = 'You are now registered and can log in.';
        this.flashMessage.show(msg, {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/login']);
      } else {
        let msg = 'Something went wrong.';
        this.flashMessage.show(msg, {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/register']);
      }
    })

  }

}

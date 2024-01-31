import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../common/user';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'

})
export class UserLoginComponent {
  storage: Storage = localStorage
  constructor(private service: UserService, private router: Router) { }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(30)])
  });
  login(insert: any) {
    console.log(this.loginForm)
  }
  // get adminId(){
  // return this.loginForm.get('adminId');
  //}
  get emailId() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  submit() {
    if (this.emailId?.value?.length === 0 || this.password?.value?.length == 0 || this.emailId?.invalid || this
      .password?.invalid) {
      alert("enter valid details")
    }
    else {
      alert(JSON.stringify(this.loginForm.value))
      let user: User = new User()

      user.userEmail = this.loginForm.value.email
      user.userPassword = this.loginForm.value.password

      this.service.getCustomerUser(user).subscribe(data => {
        console.log(data)
        this.service.getCustomerUser(user).subscribe()
        this.storage.setItem('currentCustomerUser', JSON.stringify({ email: this.emailId?.valid }));
        alert("logged in")
        this.router.navigate(['/user-page'])
      },
        error => {
          alert("Invalid credentials")
        }
      )
    }
  }


}




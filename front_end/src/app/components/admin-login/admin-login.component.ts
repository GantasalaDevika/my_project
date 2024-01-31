import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../../common/admin';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})

export class AdminLoginComponent {
  adminEmail: FormControl = new FormControl('');
  storage: Storage = localStorage
  constructor(private service: AdminService, private router: Router) { }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    passWord: new FormControl('', [Validators.required, Validators.maxLength(30)])
  });
  login(insert: any) {
    console.log(this.loginForm)
  }

  get emailId() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('passWord');
  }
  submit() {
    if (this.emailId?.value?.length === 0 || this.password?.value?.length == 0 || this.emailId?.invalid || this
      .password?.invalid) {
      alert("enter valid details")
    }
    else {
      alert(JSON.stringify(this.loginForm.value))
      let admin: Admin = new Admin()

      admin.adminEmail = this.loginForm.value.email
      admin.adminPassWord = this.loginForm.value.passWord

      this.service.getAdmin(admin).subscribe(data => {
        console.log(data)
        this.service.getAdmin(admin).subscribe()
        this.storage.setItem('currentAdminUser', JSON.stringify({ email: this.adminEmail?.valid }));
        alert("logged in")
        this.router.navigate(['/admin-page'])
      },
        error => {
          alert("Invalid credentials")
        }
      )
    }
  }


}



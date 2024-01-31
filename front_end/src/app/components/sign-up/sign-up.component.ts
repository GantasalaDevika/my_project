import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  userFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      userMail: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      userPassword: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],



    })
  }
  addUser() {
    if (this.userFormGroup.valid) {
      this.service.createUser(this.userFormGroup.value).subscribe((data) => {
        alert("New User Added successfully!!");
        this.router.navigateByUrl('users-details');
      });
    } else {
      alert('Invalid');
    }
  }

}

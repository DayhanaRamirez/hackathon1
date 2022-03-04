import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  enter(){
    const user = this.form.value.user;
    const password = this.form.value.password;

    if(user == 'admin' && password ==1234)
    {
        //Redirect to dashboard
        this.fakeLoading();
    }

    else
    {
        //Error
        this.enterError()
    }
  }

  enterError(){
    this._snackBar.open('Usuario o contraseña ingresados son invalidos', '', {

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {

      //Redirect to dashboard
      this.router.navigate(['dashboard']);
      
    }, 1500);
  }
}


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    // cpassword: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required, Validators.pattern('[789][0-9]{9}')]),
    gender: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required, Validators.pattern('[0-9]+')]),
    city: new FormControl('',[Validators.required]),
  })

  registerUser()
  {
    console.log(this.registerForm.value);
  }

  get fname(){
    return this.registerForm.get('fname');
  }
  get lname(){
    return this.registerForm.get('lname');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  /* get cpassword(){
    return this.registerForm.get('cpassword');
  } */
  get phone(){
    return this.registerForm.get('phone');
  }
  get age(){
    return this.registerForm.get('age');
  }

  ngOnInit(): void {
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
}

}


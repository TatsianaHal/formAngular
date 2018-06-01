import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registrationForm: FormGroup;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required)
      }),
      social: new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(5)]
        )
      })
    });
    console.log('registrationForm', this.registrationForm);
  }

  ok() {
    console.log(this.registrationForm.value);
    // ...
  }

}

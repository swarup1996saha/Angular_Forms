import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { emailOrPhoneRequired, noSpaceAllowed, noSpaceAllowed1 } from '../directives/custom-error.directive';

@Component({
  selector: 'app-reactive2',
  templateUrl: './reactive2.component.html',
  styleUrls: ['./reactive2.component.css'],
})
export class Reactive2Component implements OnInit {
  constructor(private fb: FormBuilder) {}
  preview: string = '';

  reactiveForm = this.fb.group({
    firstName: ['', [Validators.required,noSpaceAllowed()]],
    lastName: ['', [Validators.required]],
    contacts: this.fb.group({
      contactType: ['-1', [emailOrPhoneRequired()]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    }),
    skills: this.fb.array([]),
  });

  ngOnInit(): void {}

  getProgrammingLang(index:number){
    return this.skillForms.at(index).get('programLanguage')
  }
  removeSkill(index: number) {
    this.skillForms.removeAt(index);
  }
  addSkillFormGroup() {
    this.skillForms.push(
      this.fb.group({
        programLanguage: ['',[Validators.required]],
        experience: ['0'],
      })
    );
  }

  setValue() {
    this.reactiveForm.setValue({
      firstName: 'swarup',
      lastName: 'saha',
      contacts: {
        contactType: 'email',
        phone: '12345',
        email: 'awe@xyz.com',
      },
      skills: [],
    });
  }
  submit() {
    console.log(this.reactiveForm);
    this.preview = JSON.stringify(this.reactiveForm.value);
  }
  get firstName() {
    return this.reactiveForm.get('firstName');
  }
  get lastName() {
    return this.reactiveForm.get('lastName');
  }
  get contactType() {
    return this.reactiveForm.get('contacts.contactType');
  }
  get skillForms(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }
}

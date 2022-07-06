import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  states: Array<string> = ['AR', 'AL', 'CA', 'DC'];
  reactiveForm!: FormGroup;


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
          this.noSpaceAllowed,
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
          this.noSpaceAllowed,
        ],
      ],
      address: this.fb.group({
        addressType: ['', [Validators.required]],
        expiryDate: ['', [this.expiryDateValidator]],
        streetAddress: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipcode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      }),
      mobile: ['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      gender: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
      cpwd: ['', [Validators.required, this.matchConfirmPasswordValidation]],
      skills:this.fb.array([this.fb.control('', Validators.required)])

    });
  }
  submit() {
    console.log(this.reactiveForm);
  }
  removeSkill(i:number){
    this.Skills.removeAt(i)
  }
  addSkill(){
    this.Skills.push(this.fb.control('',[Validators.required]))
  }
  triggerExpiryValidator(){
    this.ExpiryDate.updateValueAndValidity()
  }
  expiryDateValidator(control: FormControl): Validators | null {
    if (control.parent?.get('addressType')?.value == 'temporary') {
      if (
        control.value == null ||
        control.value == undefined ||
        control.value == ''
      ) {
        return { date_error: 'Date Can not be blank' };
      }
    }
    return null;
  }
  noSpaceAllowed(control: FormControl): Validators | null {
    if (control.value !== '' && control.value.indexOf(' ') !== -1) {
      return { no_space_allowed: true };
    }
    return null;
  }
  matchConfirmPasswordValidation(control: FormControl): Validators | null {
    if (
      control.value !== '' &&
      control.value !== control.parent?.get('pwd')?.value
    ) {
      return { Password_Not_Matched: true };
    }
    return null;
  }



  get FirstName(): FormControl {
    return this.reactiveForm.get('firstName') as FormControl;
  }
  get LastName(): FormControl {
    return this.reactiveForm.get('lastName') as FormControl;
  }
  get AddressType(): FormControl {
    return this.reactiveForm.get('address.addressType') as FormControl;
  }
  get ExpiryDate():FormControl{
    return this.reactiveForm.get('address.expiryDate') as FormControl
  }
  get StreetAddress(): FormControl{
    return this.reactiveForm.get('address.streetAddress') as FormControl
  }
  get City(): FormControl{
    return this.reactiveForm.get('address.city') as FormControl
  }
  get State(): FormControl{
    return this.reactiveForm.get('address.state') as FormControl
  }
  get Zipcode(): FormControl {
    return this.reactiveForm.get('address.zipcode') as FormControl;
  }
  get Mobile(): FormControl {
    return this.reactiveForm.get('mobile') as FormControl;
  }
  get Gender(): FormControl {
    return this.reactiveForm.get('gender') as FormControl;
  }
  get Pwd(): FormControl {
    return this.reactiveForm.get('pwd') as FormControl;
  }
  get Cpwd(): FormControl {
    return this.reactiveForm.get('cpwd') as FormControl;
  }
  get Skills():FormArray{
    return this.reactiveForm.get('skills') as FormArray
  }
}


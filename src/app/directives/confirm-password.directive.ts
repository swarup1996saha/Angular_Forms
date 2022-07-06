import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[appConfirmPassword]',
  providers: [{provide:NG_VALIDATORS, useClass: ConfirmPasswordDirective, multi:true}]
})
export class ConfirmPasswordDirective implements Validators{

  constructor() { }
  validate(control:AbstractControl):ValidationErrors | null{
    if(control.value !== '' && control.value !== control.parent?.get('Pwd')?.value ){
      return {appConfirmPassword: 'Password not Matched'}
    }
    return null
  }

}

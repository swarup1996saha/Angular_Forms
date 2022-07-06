import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[noSpaceValidator]',
  providers:[{provide:NG_VALIDATORS,useExisting:NameValidatorDirective,multi: true}]
})
export class NameValidatorDirective implements Validators {

  validate(control:AbstractControl):ValidationErrors | null  {
    // console.log(control.value);
    if(control.value !== '' && control.value?.indexOf(' ') >= 0){
      return {noSpaceValidator: 'No Space Allowed'}
    }
    return null
  }
  constructor() { }

}

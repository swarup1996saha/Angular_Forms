import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export function emailOrPhoneRequired(): ValidatorFn{
  return (control:AbstractControl): ValidationErrors | null =>{
    return control.value =='-1'
    ? {emailOrPhoneRequired:{value: control.value}}
    :null
  }
}

export function noSpaceAllowed(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null =>{
    return (control.value !== '' && control.value.indexOf(' ') !== -1)
    ? { noSpaceAllowed: {value: control.value}}
    : null
  }
}

export function noSpaceAllowed1(control: AbstractControl): Validators | null {
  if (control.value !== '' && control.value.indexOf(' ') !== -1) {
    return {noSpaceAllowed1: true };
  }
  return null;
}

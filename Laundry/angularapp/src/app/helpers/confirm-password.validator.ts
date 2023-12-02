import { FormGroup } from "@angular/forms";

export function ConfirmPasswordValidator(controlName:string, matchControlName:string)
{
    return (formGroup:FormGroup) =>{
        const passwordControl = formGroup.controls[controlName];
        const confirmPasswordControl = formGroup.controls
    }
}
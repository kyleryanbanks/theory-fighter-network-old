import {
    ValidatorFn,
    AbstractControl
} from '@angular/forms';

export function arrayIncludesValidator(array: String[]): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        if (!array.includes(control.value)) {
            return { 'notInArray': true }
        }
        return null;
    };
}

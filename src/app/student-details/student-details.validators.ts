import { ValidationErrors, AbstractControl} from '@angular/forms';

export class StudentDetailValidator{


    static emailRegex (c: AbstractControl) : ValidationErrors | null {
        
        const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
        if (c.value && !regex.test(c.value) ){
           return {emailRegex: true};
        }
        else return null;
    }

    static phoneRegex (control: AbstractControl) : ValidationErrors | null {
        
        const regex = /^(?:\+88|88)?(01[3-9]\d{8})$/
        if (control.value && !regex.test(control.value) ){
           return {phoneRegex: true};
           
        }
        else return null;
    }


}
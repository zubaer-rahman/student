import { ValidationErrors, AbstractControl} from '@angular/forms';

export class StudentDetailValidator{


    static emailRegex (c: AbstractControl) : ValidationErrors | null {
        
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (c.value && !regex.test(c.value) ){
           return {emailRegex: true};
        }
        else return null;
    }

    static phoneRegex (control: AbstractControl) : ValidationErrors | null {
        
        const regex = /^(?:\+88|88)?(01[3-9]\d{8})$/
        if (control.value && !regex.test(control.value) ){
           return {phoneRegex: true};
           console.log(this.phoneRegex);
           
        }
        else return null;
    }


}
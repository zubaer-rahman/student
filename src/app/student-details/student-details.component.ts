import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentModel } from './student-details.model';
 

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  form!: FormGroup;
  studentData: StudentModel= new StudentModel;

  studentDetails:any= [];
   
   
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      address: [''],
      phone: [''],
      email: [''],
      education: this.fb.group({
        name: [''],
        institute: [''],  
        grade: [''],
        from_date: [''],
        to_date: [''] 
      })
    });
   }
   addStudentDetails(){

    this.studentData.id = this.form.value.id;
    this.studentData.name = this.form.value.name;
    this.studentData.address = this.form.value.address;
    this.studentData.phone = this.form.value.phone;
    this.studentData.email = this.form.value.email;
    this.studentData.education = this.form.value.education;

    this.studentDetails.push(this.studentData);

    console.log(this.studentDetails);
    this.form.reset();
    
    
  }


}


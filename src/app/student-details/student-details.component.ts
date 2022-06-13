import { Component, OnInit } from '@angular/core';
import { StudentDetailValidator } from './student-details.validators'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentModel } from './student-details.model';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  form!: FormGroup;
  studentData: StudentModel= new StudentModel;

  studentDetails:any = [];

  map:Map<number,StudentModel> = new Map ();

  showAdd!: boolean;
  showUpdate!: boolean;
  rowUpdate!: number;
   
   
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',Validators.required],
      address: ['',Validators.required],
      phone: ['',[Validators.required,StudentDetailValidator.phoneRegex]],
      email: ['',[Validators.required,StudentDetailValidator.emailRegex]],
      education: ['']
    });
   }
   addStudent(){
    this.form.reset();
    this.showAdd = true;
    this.showUpdate = false;

  }

   addStudentDetails(){
     if(!this.map.has(this.form.value.phone)){
      this.studentData= new StudentModel;
      this.studentData.id = this.map.size+1;
      this.studentData.name = this.form.value.name;
      this.studentData.name = this.form.value.name;
      this.studentData.address = this.form.value.address;
      this.studentData.phone = this.form.value.phone;
      this.studentData.email = this.form.value.email;
      this.studentData.education = this.form.value.education;
      this.map.set(this.studentData.id, this.studentData);
       
      console.log(this.form);
      

      this.studentDetails.push(this.studentData);
      let ref = document.getElementById('cancel');
      ref?.click();
      this.form.reset();

     }else{
       alert("Phone number already been used")
     }
    
  }
  deleteStudent(row: any) {
     this.map.delete(row.value.id);
     this.form.reset();
  } 
  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.rowUpdate = row.value.id;
    this.studentData.id = row.value.id;
    this.form.controls['name'].setValue(row.value.name);
    this.form.controls['address'].setValue(row.value.address);
    this.form.controls['phone'].setValue(row.value.phone);
    this.form.controls['email'].setValue(row.value.email);
    this.form.controls['education'].setValue(row.value.education);

  }
  updateStudent(){
    this.studentData= new StudentModel;
    this.studentData.id = this.rowUpdate;
    this.studentData.name = this.form.value.name;
    this.studentData.address = this.form.value.address;
    this.studentData.phone = this.form.value.phone;
    this.studentData.email = this.form.value.email;
    this.studentData.education = this.form.value.education;
    this.map.set(this.rowUpdate, this.studentData)
    let ref = document.getElementById('cancel');
    ref?.click();
    this.form.reset();

 
    
  }


}
 


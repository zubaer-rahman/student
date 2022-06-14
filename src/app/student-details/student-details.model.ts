import { EducationModel } from './education-details.model';
export class StudentModel {
    id: number = 0;
    name: string = '';
    address: string = '';
    phone: string = '';
    email: string = '';
    education: Map <number, EducationModel> = new Map();
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerDetailsService } from '../../employer-details.service';

@Component({
  selector: 'app-employer-form',
  templateUrl: './employer-form.component.html',
  styleUrls: ['./employer-form.component.css']
})
export class EmployerFormComponent implements OnInit {
  addEmployerForm : FormGroup;
  employeeDetailsById: any = [];
  employerId: any;
  updateEmployer: boolean = false;

  constructor( private employerDetailsService : EmployerDetailsService, private router : Router, private route : ActivatedRoute, private _formBuilder: FormBuilder) { 
    // setting form-control-values
    this.addEmployerForm = this._formBuilder.group({
      employeeName: new FormControl('',[Validators.required, Validators.pattern("^[A-Za-z]+$")]),
      employeeEmail: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$")]),
      employeeDOB:new FormControl('',[Validators.required]),
      employeeGender: new FormControl('',[Validators.required]),
      employeeDOJ: new FormControl('',[Validators.required]),
      employeeMartialStatus: new FormControl('',[Validators.required]),
      employeeContactNo: new FormControl('',[Validators.required, Validators.pattern('^[+]*[(]{0,1}[7-9]{1,4}[)]{0,1}[-\s\./0-9]*$')]),
      employeeAddress: new FormControl('',[Validators.required, Validators.pattern("^[ A-Za-z0-9_@.#&amp/,;+-]*$")]),
    })
  }

  ngOnInit(): void {
    // checking current-url for update values
    if (this.router.url.includes('edit-profile')) {
      this.updateEmployer = true;

      // getting employee-id using url
      this.route.params.subscribe(params => {
        this.employerId = params.id 
        this.employeeDetailsById = this.employerDetailsService.employeeDetails[this.employerId];
        this.bindValuesOfEmployer();
      });
    }
  }


  // function for adding new employee
  addEmployer = () => {
    try {
      this.employerDetailsService.employeeDetails.push(this.addEmployerForm.value)
      this.router.navigateByUrl('');
    } catch (error) {
      console.log(error)
    }
  }

  // binding values to the form using employee-id
  bindValuesOfEmployer = () => {
    try {
      this.addEmployerForm.patchValue({
        employeeName: this.employeeDetailsById.employeeName ? this.employeeDetailsById.employeeName : null,
        employeeEmail: this.employeeDetailsById.employeeEmail ? this.employeeDetailsById.employeeEmail : null,
        employeeDOB: this.employeeDetailsById.employeeDOB ? this.employeeDetailsById.employeeDOB : null,
        employeeGender: this.employeeDetailsById.employeeGender ? this.employeeDetailsById.employeeGender : null,
        employeeDOJ: this.employeeDetailsById.employeeDOJ ? this.employeeDetailsById.employeeDOJ : null,
        employeeMartialStatus: this.employeeDetailsById.employeeMartialStatus ? this.employeeDetailsById.employeeMartialStatus : null,
        employeeContactNo: this.employeeDetailsById.employeeContactNo ? this.employeeDetailsById.employeeContactNo : null,
        employeeAddress: this.employeeDetailsById.employeeAddress ? this.employeeDetailsById.employeeAddress : null,
      });
    } catch (error) {
      console.log(error)
    }
  }

  // updating values of employee
  updateEmployerDetails = () => {
    try {
      if ((this.employeeDetailsById.employeeName == this.addEmployerForm.value.employeeName) &&
         (this.employeeDetailsById.employeeEmail == this.addEmployerForm.value.employeeEmail) &&
         (this.employeeDetailsById.employeeGender == this.addEmployerForm.value.employeeGender) &&
         (this.employeeDetailsById.employeeMartialStatus == this.addEmployerForm.value.employeeMartialStatus) &&
         (this.employeeDetailsById.employeeContactNo == this.addEmployerForm.value.employeeContactNo) &&
         (this.employeeDetailsById.employeeAddress == this.addEmployerForm.value.employeeAddress && 
         (this.employeeDetailsById.employeeDOJ == this.addEmployerForm.value.employeeDOJ) &&
         (this.employeeDetailsById.employeeDOB == this.addEmployerForm.value.employeeDOB)) ) {
        alert('Please change any value to update');
      } else {
        this.employerDetailsService.employeeDetails[this.employerId] = this.addEmployerForm.value;
        this.router.navigateByUrl('');
      }
    } catch (error) {
      console.log(error)
    }
  }
}

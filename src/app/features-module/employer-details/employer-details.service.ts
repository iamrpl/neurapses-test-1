import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployerDetailsService {

  employeeDetails : any = [];

  constructor() {
    this.employeeDetailsValues();
  }

  // dummy employer array for employer-details
  employeeDetailsValues = () => {
    try {
      this.employeeDetails = [
        {
          employeeName : 'rushikesh',
          employeeEmail: 'rushikesh9309@gmail.com',
          employeeDOB: '1999-08-18',
          employeeGender: 'male',
          employeeDOJ: '2021-08-20',
          employeeMartialStatus: 'single',
          employeeContactNo: 9130810729,
          employeeAddress: 'ahmednagar'
        },
        {
          employeeName : 'aniket',
          employeeEmail: 'aniketpunde21@gmail.com',
          employeeDOB: '1999-07-16',
          employeeGender: 'male',
          employeeDOJ: '2020-07-07',
          employeeMartialStatus: 'married',
          employeeContactNo: 9485738476,
          employeeAddress: 'pune'
        },
        {
          employeeName : 'smita',
          employeeEmail: 'smita.waykar@gmail.com',
          employeeDOB: '1998-12-19',
          employeeGender: 'female',
          employeeDOJ: '2018-01-14',
          employeeMartialStatus: 'single',
          employeeContactNo: 8987865456,
          employeeAddress: 'pune'
        },
        {
          employeeName : 'pritam',
          employeeEmail: 'landepritam2@gmail.com',
          employeeDOB: '2000-04-01',
          employeeGender: 'female',
          employeeDOJ: '2020-05-19',
          employeeMartialStatus: 'married',
          employeeContactNo: 98989676677,
          employeeAddress: 'banglore'
        },
        {
          employeeName : 'ankit',
          employeeEmail: 'ankit21@gmail.com',
          employeeDOB: '2000-09-16',
          employeeGender: 'male',
          employeeDOJ: '2020-06-02',
          employeeMartialStatus: 'married',
          employeeContactNo: 9867887667,
          employeeAddress: 'hyderabad'
        },
        {
          employeeName : 'saurabh',
          employeeEmail: 'sshelot32@gmail.com',
          employeeDOB: '1993-02-05',
          employeeGender: 'male',
          employeeDOJ: '2016-03-19',
          employeeMartialStatus: 'single',
          employeeContactNo: 7565678909,
          employeeAddress: 'kerala'
        },
        {
          employeeName : 'rutuja',
          employeeEmail: 'rutuja2898@gmail.com',
          employeeDOB: '1998-02-12',
          employeeGender: 'female',
          employeeDOJ: '2019-03-30',
          employeeMartialStatus: 'single',
          employeeContactNo: 7876567755,
          employeeAddress: 'pune'
        },
        {
          employeeName : 'akshay',
          employeeEmail: 'akshay28@gmail.com',
          employeeDOB: '1992-03-30',
          employeeGender: 'male',
          employeeDOJ: '2017-06-02',
          employeeMartialStatus: 'married',
          employeeContactNo: 9876554587,
          employeeAddress: 'hyderabad'
        },
        {
          employeeName : 'swapnil',
          employeeEmail: 'swapnil.tajane@gmail.com',
          employeeDOB: '1998-11-11',
          employeeGender: 'male',
          employeeDOJ: '2019-05-07',
          employeeMartialStatus: 'single',
          employeeContactNo: 9876544321,
          employeeAddress: 'pune'
        },
        {
          employeeName : 'aarti',
          employeeEmail: 'aarti938@gmail.com',
          employeeDOB: '1997-10-20',
          employeeGender: 'female',
          employeeDOJ: '2019-02-16',
          employeeMartialStatus: 'married',
          employeeContactNo: 8767568767,
          employeeAddress: 'ahmednagar'
        }

      ]
    } catch (error) {
      console.log(error)
    }
  }

}

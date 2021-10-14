import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerDetailsService } from '../../employer-details.service';

@Component({
  selector: 'app-employer-table',
  templateUrl: './employer-table.component.html',
  styleUrls: ['./employer-table.component.css']
})
export class EmployerTableComponent implements OnInit {
  constructor( public employerDetailsService : EmployerDetailsService, private router : Router ) { }

  ngOnInit(): void {
  }

  // navigate user to adit page by passing id to route
  editEmmployerDetails = (getId : any) => {
    try {
      this.router.navigate(['edit-profile',getId])
    } catch (error) {
      console.log(error)
    }
  }

  // delete perticular employer using id
  deleteEmployer = (getId : any) => {
    try {
      this.employerDetailsService.employeeDetails.splice(getId, 1)
    } catch (error) {
      console.log(error)
    }
  }
}

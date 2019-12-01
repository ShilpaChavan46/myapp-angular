import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit
{
  companies = []

  constructor(private service: CompanyService ) { }

  ngOnInit()
  {
    this.service
    .getCompanies()
    .subscribe(response => {
      if(response['status'] === 'success')
      {
        this.companies = response['data'] as any[]
      }
      else
      {
        console.log('error:', response['error'])
      }
    })

  }

}

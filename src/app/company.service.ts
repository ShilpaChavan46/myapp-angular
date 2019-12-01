import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService
{
  url = 'http://localhost:9009/company'

  constructor(private http: HttpClient) { }

  getCompanies() {
    return this.http.get(this.url)
  }
}

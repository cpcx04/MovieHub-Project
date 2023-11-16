import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailResponse } from 'src/app/models/company-detail.interface';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {

  @Input() companyToShow!: CompanyDetailResponse;
  companyDesc = '';
  
  ngOnInit(): void {
    if (this.companyToShow.description != '') {
      this.companyDesc = this.companyToShow.description;
    } else {
      this.companyDesc='Company whitout description'
    }
  }
  
  getCompanyImg() {
    return `https://image.tmdb.org/t/p/w500${this.companyToShow.logo_path}`;
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailResponse } from 'src/app/models/company-detail.interface';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {

  companyToShow!: CompanyDetailResponse;
  companyDesc = '';
  id = 1;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) { }
  
  ngOnInit(): void {
    //Se coloca un id de prueba para comprobar que funciona el componente
    this.route.params.subscribe(p => this.id = +p['id'] )
    this.companyService.getCompanyById(3172).subscribe(resp => {
      this.companyToShow = resp;
      if (resp.description != '') {
        this.companyDesc = resp.description;
      } else {
        this.companyDesc='Company whitout description'
      }
    })
  }
  
  getCompanyImg() {
    return `https://image.tmdb.org/t/p/w500${this.companyToShow.logo_path}`;
  }
}

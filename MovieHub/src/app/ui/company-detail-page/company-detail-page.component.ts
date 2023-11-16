import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailResponse } from 'src/app/models/company-detail.interface';
import { Film } from 'src/app/models/movieObject-list.interface';
import { Serie } from 'src/app/models/serie-list.interface';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-detail-page',
  templateUrl: './company-detail-page.component.html',
  styleUrls: ['./company-detail-page.component.css']
})
export class CompanyDetailPageComponent implements OnInit{

  id = 1;
  company!: CompanyDetailResponse;
  listSeries: Serie[] = [];
  listMovies: Film[] = [];

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(p => this.id = +p['id']);
    this.companyService.getCompanyById(this.id).subscribe(resp => {
      this.company = resp;
    })
    this.companyService.getMoviesByCompanyId(this.id).subscribe(resp => {
      this.listMovies = resp.results;
    })
    this.companyService.getSeriesByCompanyId(this.id).subscribe(resp => {
      console.log(resp.results);
      
      this.listSeries = resp.results;
    })
  }
  

}

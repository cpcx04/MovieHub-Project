import { Component, OnInit } from '@angular/core';
import { AccountDetailResponse } from 'src/app/models/account-detail.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit{
  
  profile!: AccountDetailResponse;
  profileName = '';
  avatharPath = '';
  numberOfRating = 0;
  porcentMovieRated = 0;
  porcentSerieRated = 0;

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      this.profileName = resp.username.replace('', ' ');
      this.profile = resp;
      this.avatharPath = resp.avatar.tmdb.avatar_path;
    })
    
    this.accountService.getRatedEpisodes().subscribe(resp => {
      this.numberOfRating += resp.total_results;
    });
    this.accountService.getRatedMovies().subscribe(resp => {
      this.numberOfRating += resp.total_results;
      let sumTotal = 0;
      for (let i = 0; i < resp.total_results; i++) {
        sumTotal += resp.results[i].rating;
      }
      this.porcentMovieRated = sumTotal / resp.total_results;
    });
    this.accountService.getRatedSeries().subscribe(resp => {
      this.numberOfRating += resp.total_results;
      let sumTotal = 0;
      for (let i = 0; i < resp.total_results; i++) {
        sumTotal += resp.results[i].rating;
      }
      this.porcentSerieRated = sumTotal / resp.total_results;
    });
    
  }

  getImgAvatar() {
    if (this.avatharPath != null) {
      return `https://image.tmdb.org/t/p/w500${this.avatharPath}`;
    }else {
      return '../../../assets/img/placeholder.jpg'
    }
  }

}

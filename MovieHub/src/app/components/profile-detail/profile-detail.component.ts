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
  profileName: string = '';
  numberOfRating = 0;

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      this.profile = resp;
      this.profileName = this.profile.username.replace('', ' ');
    })
   
    this.accountService.getRatedEpisodes().subscribe(resp => {
      this.numberOfRating += resp.total_results;
    });
    this.accountService.getRatedMovies().subscribe(resp => {
      this.numberOfRating += resp.total_results;
    });
    this.accountService.getRatedSeries().subscribe(resp => {
      this.numberOfRating += resp.total_results;
    });
    
  }

  getImgAvatar() {
    if (this.profile.avatar.tmdb.avatar_path != 'null') {
      return `https://image.tmdb.org/t/p/w500${this.profile.avatar.tmdb.avatar_path}`;
    }else {
      return '../../../assets/img/placeholder.jpg'
    }
  }

}

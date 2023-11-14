import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  
  successSession: boolean = false;
  avatarPath: string = '';

  constructor(private authService: AuthService, private accountService: AccountService){}
  
  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      if (resp != null) {
        this.successSession = true;
        this.avatarPath = resp.avatar.tmdb.avatar_path;
      }
    })
  }

  logging() {
    this.authService.getRequestToken().subscribe(resp => {
      localStorage.setItem('request_token', resp.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('request_token')}?redirect_to=http://localhost:4200/approved`;
    })
  }

  getImgAvatar() {
    if (this.avatarPath != null) {
      return `https://image.tmdb.org/t/p/w500${this.avatarPath}`;
    }else {
      return '../../../assets/img/placeholder.jpg'
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-auth-approved',
  templateUrl: './auth-approved.component.html',
  styleUrls: ['./auth-approved.component.css']
})
export class AuthApprovedComponent implements OnInit{

  constructor(private authService: AuthService, private accountService: AccountService, private router: Router){}
  
  ngOnInit(): void {
    this.authService.createSession(localStorage.getItem('request_token')!).subscribe(resp => {
      localStorage.setItem('session_id', resp.session_id);      
      this.router.navigateByUrl('/profile');
    })
  }
}

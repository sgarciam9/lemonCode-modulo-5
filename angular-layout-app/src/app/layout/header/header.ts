import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  constructor(public authService: AuthService, private router: Router) {}
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

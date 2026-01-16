import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private logged = false;
  private username = '';

  login(username: string, password: string): boolean {
    if (username === 'master@lemoncode.net' && password === '12345678') {
      this.logged = true;
      this.username = username;
      return true;
    }

    return false;
  }

  logout(): void {
    this.logged = false;
    this.username = '';
  }

  isLogged(): boolean {
    return this.logged;
  }

  getUsername(): string {
    return this.username;
  }
}

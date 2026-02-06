import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent]

})
export class AppComponent {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoLogin();
  }
}

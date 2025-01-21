import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'app-shell';

  constructor(
    private router: Router,
    public darkModeService: DarkModeService
  ) {}

  isActive(route: string): boolean {
    return this.router.url === `/${route}`;
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}

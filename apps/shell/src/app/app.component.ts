import { Component, effect, HostBinding, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @HostBinding('class.dark') get mode() {
    return this.darkModeService.darkMode();
  }

  constructor(private darkModeService: DarkModeService) {}
}
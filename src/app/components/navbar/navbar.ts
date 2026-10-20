import { Component, HostListener, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HOME_PATH } from '../../app.routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  private router = inject(Router);

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Not on the home page (e.g. Impressum) – go there and jump to the section
      this.router.navigate(['/', HOME_PATH], { fragment: sectionId });
    }
    this.mobileMenuOpen.set(false);
  }

  goHome() {
    if (document.getElementById('music')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/', HOME_PATH]);
    }
    this.mobileMenuOpen.set(false);
  }

  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }
}

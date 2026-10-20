import { Component, computed, effect, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private meta = inject(Meta);

  private url = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => (e as NavigationEnd).urlAfterRedirects),
      startWith(this.router.url)
    )
  );

  showChrome = computed(() => {
    const url = this.url() ?? '';
    return url !== '/' && url !== '';
  });

  constructor() {
    // Keep pages that are not public yet (e.g. /backstage) out of search engines
    effect(() => {
      this.url();
      let child = this.route.snapshot;
      while (child.firstChild) child = child.firstChild;
      this.meta.updateTag({
        name: 'robots',
        content: child.data['noindex'] ? 'noindex, nofollow' : 'index, follow'
      });
    });
  }
}

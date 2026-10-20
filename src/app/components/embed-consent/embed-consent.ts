import { Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

/**
 * Two-click solution for third-party embeds (GDPR): the iframe is only
 * created after the visitor explicitly agrees, so no data is sent to the
 * provider before that.
 */
@Component({
  selector: 'app-embed-consent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './embed-consent.html',
  styleUrl: './embed-consent.scss'
})
export class EmbedConsentComponent {
  private sanitizer = inject(DomSanitizer);

  src = input.required<string>();
  title = input.required<string>();
  provider = input.required<string>();

  loaded = signal(false);

  safeUrl = computed(() => this.sanitizer.bypassSecurityTrustResourceUrl(this.src()));

  load() {
    this.loaded.set(true);
  }
}

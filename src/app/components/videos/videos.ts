import { Component } from '@angular/core';
import { EmbedConsentComponent } from '../embed-consent/embed-consent';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [EmbedConsentComponent],
  templateUrl: './videos.html',
  styleUrl: './videos.scss'
})
export class VideosComponent {
  videos = [
    { id: 'lnbvvY3v80E', title: 'F.A.T — DROWNED IN DECAY' },
  ].map(v => ({
    ...v,
    // youtube-nocookie.com: no tracking cookies until the visitor hits play
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`
  }));
}

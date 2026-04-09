import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.html',
  styleUrl: './videos.scss'
})
export class VideosComponent {
  videos: { id: string; title: string; safeUrl: SafeResourceUrl }[];

  constructor(private sanitizer: DomSanitizer) {
    const raw = [
      { id: 'lnbvvY3v80E', title: 'F.A.T — DROWNED IN DECAY' },
    ];
    this.videos = raw.map(v => ({
      ...v,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${v.id}`
      )
    }));
  }
}

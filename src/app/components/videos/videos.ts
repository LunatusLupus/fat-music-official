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
      { id: 'W4ZlWw987KI', title: 'ARCHITECTS — "ANIMALS"' },
      { id: '8SoLPeFquLM', title: 'ARCHITECTS — "GONE WITH THE WIND"' },
      { id: 'C9CrT6iC7Cc', title: 'ARCHITECTS — "DEVIL IS NEAR"' },
    ];
    this.videos = raw.map(v => ({
      ...v,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${v.id}`
      )
    }));
  }
}

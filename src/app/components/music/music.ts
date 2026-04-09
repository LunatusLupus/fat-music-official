import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './music.html',
  styleUrl: './music.scss'
})
export class MusicComponent {
  bandcampUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.bandcampUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://bandcamp.com/EmbeddedPlayer/track=227092325/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/'
    );
  }
}

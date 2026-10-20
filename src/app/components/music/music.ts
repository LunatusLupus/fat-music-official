import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EmbedConsentComponent } from '../embed-consent/embed-consent';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [MatButtonModule, EmbedConsentComponent],
  templateUrl: './music.html',
  styleUrl: './music.scss'
})
export class MusicComponent {
  bandcampUrl =
    'https://bandcamp.com/EmbeddedPlayer/track=227092325/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/';
}

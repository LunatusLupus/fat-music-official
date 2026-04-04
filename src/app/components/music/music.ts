import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './music.html',
  styleUrl: './music.scss'
})
export class MusicComponent {
  albums = [
    {
      title: 'SELF-TITLED EP',
      year: '2023',
      genre: 'Metalcore',
      gradient: 'linear-gradient(135deg, #1a0020 0%, #E91E63 50%, #0a0a0a 100%)'
    },
    {
      title: 'WRECKAGE',
      year: '2024',
      genre: 'Metalcore / Deathcore',
      gradient: 'linear-gradient(135deg, #0d0010 0%, #673AB7 50%, #0a0a0a 100%)'
    }
  ];
}

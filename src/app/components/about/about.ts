import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  // TODO(content): echte Namen eintragen (oder Mitglieder-Raster entfernen)
  members = [
    { role: 'VOCALIST', name: 'TBA' },
    { role: 'GUITARIST', name: 'TBA' },
    { role: 'BASSIST', name: 'TBA' },
    { role: 'DRUMMER', name: 'TBA' },
  ];
}

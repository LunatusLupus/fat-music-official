import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './privacy.html',
  // Same legal-page layout as the Impressum
  styleUrl: '../imprint/imprint.scss'
})
export class PrivacyComponent {}

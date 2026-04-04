import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss'
})
export class ImprintComponent {}

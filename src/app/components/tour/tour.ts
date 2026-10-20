import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

export interface Show {
  date: string;
  city: string;
  venue: string;
  ticketUrl?: string;
  soldOut?: boolean;
}

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './tour.html',
  styleUrl: './tour.scss'
})
export class TourComponent {
  // TODO(content): echte Termine eintragen, z. B.
  // { date: 'NOV 14, 2026', city: 'DARMSTADT', venue: 'Club XY', ticketUrl: 'https://…' }
  tourDates: Show[] = [];
}

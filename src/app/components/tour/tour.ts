import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [MatButtonModule, MatListModule],
  templateUrl: './tour.html',
  styleUrl: './tour.scss'
})
export class TourComponent {
  tourDates = [
    { date: 'MAR 15, 2025', city: 'BERLIN', venue: 'Metropol', soldOut: false },
    { date: 'MAR 22, 2025', city: 'HAMBURG', venue: 'Gruenspan', soldOut: false },
    { date: 'APR 05, 2025', city: 'MUNICH', venue: 'Backstage Werk', soldOut: true },
    { date: 'APR 19, 2025', city: 'VIENNA', venue: 'Arena Wien', soldOut: false },
    { date: 'MAY 03, 2025', city: 'ZURICH', venue: 'Dynamo', soldOut: false },
    { date: 'JAN 17, 2026', city: 'LEIPZIG', venue: 'Täubchenthal', soldOut: false },
  ];
}

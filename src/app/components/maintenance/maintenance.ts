import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './maintenance.html',
  styleUrl: './maintenance.scss'
})
export class MaintenanceComponent {}

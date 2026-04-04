import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ImprintComponent } from './components/imprint/imprint';
import { MaintenanceComponent } from './components/maintenance/maintenance';

export const routes: Routes = [
  { path: '', component: MaintenanceComponent },
  { path: 'backstage', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: '**', redirectTo: '' }
];

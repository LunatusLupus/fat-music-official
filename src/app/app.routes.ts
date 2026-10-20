import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ImprintComponent } from './components/imprint/imprint';
import { MaintenanceComponent } from './components/maintenance/maintenance';
import { PrivacyComponent } from './components/privacy/privacy';

// Path of the real band page. Set to '' (and drop the maintenance route) to go live.
export const HOME_PATH = 'backstage';

export const routes: Routes = [
  { path: '', component: MaintenanceComponent, title: 'FAT — Metalcore' },
  { path: HOME_PATH, component: HomeComponent, title: 'FAT — Metalcore', data: { noindex: true } },
  { path: 'imprint', component: ImprintComponent, title: 'Impressum — FAT' },
  { path: 'privacy', component: PrivacyComponent, title: 'Datenschutz — FAT' },
  { path: '**', redirectTo: '' }
];

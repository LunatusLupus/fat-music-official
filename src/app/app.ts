import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { MusicComponent } from './components/music/music';
import { TourComponent } from './components/tour/tour';
import { VideosComponent } from './components/videos/videos';
import { AboutComponent } from './components/about/about';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    MusicComponent,
    TourComponent,
    VideosComponent,
    AboutComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

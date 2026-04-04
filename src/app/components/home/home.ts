import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { MusicComponent } from '../music/music';
import { TourComponent } from '../tour/tour';
import { VideosComponent } from '../videos/videos';
import { AboutComponent } from '../about/about';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, MusicComponent, TourComponent, VideosComponent, AboutComponent],
  template: `
    <app-hero></app-hero>
    <app-music></app-music>
    <app-tour></app-tour>
    <app-videos></app-videos>
    <app-about></app-about>
  `
})
export class HomeComponent {}

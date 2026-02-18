import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { SeriesService } from '../../services/series';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  private readonly _seriesService = inject(SeriesService);
  series$ = this._seriesService.getAll();
}
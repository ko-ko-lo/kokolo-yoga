import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meditation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meditation-card.component.html',
  styleUrl: './meditation-card.component.scss',
})
export class MeditationCardComponent implements OnInit {
  meditations: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch the meditation data from the JSON file
    this.http.get<any[]>('data/meditations.json').subscribe((data) => {
      this.meditations = data;
    });
  }
}
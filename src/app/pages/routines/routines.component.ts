import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingCardComponent } from '../../components/training-card/training-card.component';

@Component({
  selector: 'app-routines',
  standalone: true,
  imports: [TrainingCardComponent],
  templateUrl: './routines.component.html',
  styleUrl: './routines.component.scss',
})
export class RoutinesComponent {
  routineSlug: string | null = null;
  routineData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.routineSlug = this.route.snapshot.paramMap.get('slug');

    // Fetch routine data from JSON
    this.http.get<any[]>('/data/yoga-routines.json').subscribe((data) => {
      this.routineData = data.find(
        (routine) => routine.slug === this.routineSlug
      );
    });
  }
}

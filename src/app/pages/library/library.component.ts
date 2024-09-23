import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilteringComponent } from '../../components/filtering/filtering.component';
import { MeditationCardComponent } from '../../components/meditation-card/meditation-card.component';
import { YogaCardComponent } from '../../components/yoga-card/yoga-card.component';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    CommonModule,
    YogaCardComponent,
    MeditationCardComponent,
    FilteringComponent,
  ],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  yogaPoses: any[] = []; // Stores all yoga poses
  filteredPoses: any[] = []; // Stores filtered yoga poses
  selectedFilter: string = 'All Target Areas';
  filterOptions: string[] = [
    'All Target Areas',
    'Back / Spine',
    'Chest',
    'Hips',
    'Legs',
    'Upper Body',
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch yoga poses from the JSON file
    this.http.get<any[]>('data/yoga-poses.json').subscribe((data) => {
      this.yogaPoses = data;
      this.filteredPoses = this.yogaPoses; // Initially show all poses
    });
  }

  // Handle filter changes
  onFilterChange(selectedFilter: string): void {
    this.selectedFilter = selectedFilter;

    if (selectedFilter === 'All Target Areas') {
      this.filteredPoses = this.yogaPoses; // Show all poses when "All Target Areas" is selected
    } else {
      this.filteredPoses = this.yogaPoses.filter((pose) =>
        pose.targetAreas.includes(selectedFilter)
      );
    }
  }
}

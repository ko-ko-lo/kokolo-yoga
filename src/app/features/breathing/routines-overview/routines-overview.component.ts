import { Component } from '@angular/core';
import { IntroSubpagesComponent } from '../../../components/intro-subpages/intro-subpages.component';

@Component({
  selector: 'app-routines-overview',
  standalone: true,
  imports: [IntroSubpagesComponent],
  templateUrl: './routines-overview.component.html',
  styleUrl: './routines-overview.component.scss',
})
export class BreathingRoutinesOverviewComponent {
  title: string = 'Find your Breathing Routine, enjoy the practice';
  text: string =
    'Explore these curated breathing routines at your own pace or follow the suggested timing for each technique. Take small pauses between techniques to reset and observe how you feel before moving to the next practice. Ratios are provided as a guide to help you maintain a steady rhythm and deepen your experience - feel free to adjust them to suit your comfort and needs. Remember, your breath is your guide, so always listen to your body and breathe with ease.';
}
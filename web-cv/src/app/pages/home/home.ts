import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [MatToolbarModule, MatCardModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  animateButton = false;

  triggerButtonAnimation() {
    this.animateButton = true;
    setTimeout(() => {
      this.animateButton = false;
    }, 300); // Duración de la animación en ms
  }
}

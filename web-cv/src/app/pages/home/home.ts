import { Component } from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Api } from '../../services/api';
import { MainInfo } from '../../models/mainInfo';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [NgIf, JsonPipe, MatToolbarModule, MatCardModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  animateButton = false;
  info?: MainInfo;
  
  constructor(private api: Api) { }
  
  initSession() {
    this.api.getMainData().subscribe(data => {
      this.info = data;
    });
  }

  triggerButtonAnimation() {
    this.animateButton = true;
    setTimeout(() => {
      this.animateButton = false;
    }, 300); // Duración de la animación en ms
  }
}

// landing-page.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  projectUrl = environment.projectUrl;
  blogUrl = environment.blogUrl;

  constructor(private router: Router) {}

  continue() {
    this.router.navigate(['/institution']); // Cambia '/institution' a la ruta para continuar en la app
  }
}

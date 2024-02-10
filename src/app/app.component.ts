// src/app/app.component.ts

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './home/components/footer/footer.component';
import { LoadingService } from './home/services/loading.service';
import { LoadingComponent } from './home/components/loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,
            FooterComponent,
            LoadingComponent,
            CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Asegúrate de que este archivo exista o elimina esta línea si no tienes estilos específicos
})
export class AppComponent {
  loading$ = this.loadingService.isLoading;

  constructor(private loadingService: LoadingService) { }
}

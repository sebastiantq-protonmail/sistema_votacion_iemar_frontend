import { Component, OnInit } from '@angular/core';
import { PersoneroService } from '../../services/personero.service';
import { Candidate } from '../../interfaces/candidate.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingService } from '../../../home/services/loading.service';

@Component({
  selector: 'app-personero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personero.component.html',
  styleUrls: ['./personero.component.css']
})
export class PersoneroComponent implements OnInit {
  title = 'Votación para Personero';

  candidates: Candidate[] = [];

  constructor(private personeroService: PersoneroService, private router: Router, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.show(); // Mostrar el indicador de carga
    this.personeroService.getCandidates().subscribe(
      (candidates) => {
        this.loadingService.hide(); // Ocultar el indicador de carga
        this.candidates = candidates;
      },
      (error) => {
        this.loadingService.hide(); // Ocultar el indicador de carga
        console.error('Error getting candidates!', error);
      });
  }

  vote(candidateId: number) {
    this.loadingService.show(); // Mostrar el indicador de carga
    this.personeroService.voteForCandidate(candidateId).subscribe(
      (success) => {
        this.loadingService.hide(); // Ocultar el indicador de carga
        alert(`Voto registrado para el candidato ${candidateId}`);
        // Aquí puedes añadir lógica adicional para manejar el voto exitoso
        this.router.navigate(['/contralor']); // Change the URL to the URL that you want to redirect the user to.
      },
      (error) => {
        this.loadingService.hide(); // Ocultar el indicador de carga
        console.error('Vote for candidate failed!', error);
      });
  }
}
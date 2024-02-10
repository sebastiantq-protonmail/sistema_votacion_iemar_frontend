import { Component, OnInit } from '@angular/core';
import { ContralorService } from '../../services/contralor.service';
import { Candidate } from '../../interfaces/candidate.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingService } from '../../../home/services/loading.service';

@Component({
  selector: 'app-contralor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contralor.component.html',
  styleUrls: ['./contralor.component.css']
})
export class ContralorComponent implements OnInit {
  title = 'Votación para Contralor';
  candidates: Candidate[] = [];

  constructor(private contralorService: ContralorService, private router: Router, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.contralorService.getCandidates().subscribe(
      (candidates) => {
        this.candidates = candidates;
        this.loadingService.hide(); // Ocultar el indicador de carga
      },
      (error) => {
        this.loadingService.hide(); // Ocultar el indicador de carga
        console.error('Error getting candidates!', error);

      });
  }

  vote(candidateId: number) {
    this.loadingService.show(); // Ocultar el indicador de carga
    this.contralorService.voteForCandidate(candidateId).subscribe(
      (success) => {
        this.loadingService.hide(); // Ocultar el indicador de carga
        alert(`Voto registrado para el candidato ${candidateId}`);
        // Aquí puedes añadir lógica adicional para manejar el voto exitoso
        this.router.navigate(['/successful']); // Change the URL to the URL that you want to redirect the user to.
      },
      (error) => {
        this.loadingService.hide(); // Ocultar el indicador de carga
        console.error('Vote for candidate failed!', error);
      });
  }
}
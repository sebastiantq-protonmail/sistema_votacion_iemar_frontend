import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Candidate } from '../interfaces/candidate.interface';

@Injectable({
  providedIn: 'root'
})
export class PersoneroService {

  constructor() { }

  getCandidates(): Observable<Candidate[]> {
    // Simulación de datos de los candidatos obtenidos de un endpoint
    const randomLength = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 10
    const candidates = Array.from({ length: randomLength }, (_, i) => ({
      id: i + 1,
      name: `Candidato ${i + 1}`,
      description: `Descripción del candidato ${i + 1}`,
      // Agrega más datos según necesites
    }));

    return of(candidates); // Retorna un observable con los candidatos simulados
  }

  voteForCandidate(candidateId: number): Observable<boolean> {
    console.log(`Votando por el candidato ${candidateId}`);
    // Simula la votación por un candidato
    return of(true); // Simula una respuesta exitosa
  }
}

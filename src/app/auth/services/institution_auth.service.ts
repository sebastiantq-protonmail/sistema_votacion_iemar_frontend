import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitutionAuthService {
  
  constructor() { }

  institution_auth(apiKey: string): Observable<boolean> {
    // Aquí harías una solicitud a tu servidor para autenticar al votante
    // Simulamos un retraso de 1 segundo antes de retornar el valor
    return of(true);
  }
}

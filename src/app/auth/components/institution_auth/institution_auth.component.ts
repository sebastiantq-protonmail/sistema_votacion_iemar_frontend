import { Component } from '@angular/core';
import { InstitutionAuthService } from '../../services/institution_auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoadingService } from '../../../home/services/loading.service';

@Component({
  selector: 'app-institution_auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './institution_auth.component.html',
  styleUrls: ['./institution_auth.component.css']
})
export class InstitutionAuthComponent {
  institution_auth = {
    apiKey: ''
  };

  constructor(private institutionAuthService: InstitutionAuthService, private router: Router, private loadingService: LoadingService) { }

  onSubmit() {
    this.loadingService.show(); // Mostrar el indicador de carga
    this.institutionAuthService.institution_auth(this.institution_auth.apiKey).subscribe(
      (institutionAuthSuccessful) => {
        this.loadingService.hide(); // Ocultar el indicador de carga
        if (institutionAuthSuccessful) {
          this.router.navigate(['/voter']); // Redirige al usuario
        } else {
          alert('Institution auth failed!'); // Manejar el caso de error
        }
      },
      (error) => {
        this.loadingService.hide(); // Ocultar el indicador de carga incluso si hay un error
        console.error('There was an error!', error);
      }
    );
  }
}

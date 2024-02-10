import { Component } from '@angular/core';
import { VoterAuthService } from '../../services/voter_auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoadingService } from '../../../home/services/loading.service';

@Component({
  selector: 'app-voter_auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './voter_auth.component.html',
  styleUrls: ['./voter_auth.component.css']
})
export class VoterAuthComponent {
  voter_auth = {
    document_number: '',
    code: ''
  };

  constructor(private voterAuthService: VoterAuthService, private router: Router, private loadingService: LoadingService) { }

  onSubmit() {
    this.loadingService.show(); // Mostrar el indicador de carga
    this.voterAuthService.voter_auth(this.voter_auth.document_number, this.voter_auth.code).subscribe(
      (voterAuthSuccessful) => {
        this.loadingService.hide(); // Ocultar el indicador de carga
        if (voterAuthSuccessful) {
          this.router.navigate(['/personero']); // Redirige al usuario
        } else {
          alert('Voter auth failed!'); // Manejar el caso de error
        }
      },
      (error) => {
        this.loadingService.hide(); // Ocultar el indicador de carga incluso si hay un error
        console.error('There was an error!', error);
      }
    );
  }
}

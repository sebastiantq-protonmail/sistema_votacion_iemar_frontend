import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/voter']); // Cambia por la ruta a la que deseas redirigir después del mensaje de éxito.
    }, 3000); // Espera 3 segundos antes de redirigir
  }
}

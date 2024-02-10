import { Routes } from '@angular/router';
import { LandingPageComponent } from './home/components/landing-page/landing-page.component';
import { InstitutionAuthComponent } from './auth/components/institution_auth/institution_auth.component';
import { VoterAuthComponent } from './auth/components/voter_auth/voter_auth.component';
import { PersoneroComponent } from './voting/components/personero/personero.component';
import { ContralorComponent } from './voting/components/contralor/contralor.component';
import { SuccessfulComponent } from './voting/components/successful/successful.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'institution', component: InstitutionAuthComponent },
  { path: 'voter', component: VoterAuthComponent },
  { path: 'personero', component: PersoneroComponent },
  { path: 'contralor', component: ContralorComponent },
  { path: 'successful', component: SuccessfulComponent },
  { path: '**', redirectTo: '' } // Redirecciona cualquier ruta no reconocida a la landing page
];

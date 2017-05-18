import { Routes }          from '@angular/router';

import { GeneroListComponent } from './genero-list.component';
import { GeneroFormComponent } from './genero-form.component';
import {AuthGuardService} from "../auth-guard.service";

export const GeneroRoutes: Routes = [
  {path: 'genero', component: GeneroListComponent, canActivate: [AuthGuardService]},
  {path: 'genero/:id/edit', component: GeneroFormComponent, canActivate: [AuthGuardService]},
  {path: 'genero/new', component: GeneroFormComponent, canActivate: [AuthGuardService]}
];

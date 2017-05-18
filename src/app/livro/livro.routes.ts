import { Routes }          from '@angular/router';

import { LivroListComponent } from './livro-list.component';
import { LivroFormComponent } from './livro-form.component';
import {AuthGuardService} from "../auth-guard.service";

export const LivroRoutes: Routes = [
  {path: 'livro', component: LivroListComponent, canActivate: [AuthGuardService]},
  {path: 'livro/:id/edit', component: LivroFormComponent, canActivate: [AuthGuardService]},
  {path: 'livro/new', component: LivroFormComponent, canActivate: [AuthGuardService]}
];

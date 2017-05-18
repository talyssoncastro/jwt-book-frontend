import { Routes }          from '@angular/router';

import { EditoraListComponent } from './editora-list.component';
import { EditoraFormComponent } from './editora-form.component';
import {AuthGuardService} from "../auth-guard.service";

export const EditoraRoutes: Routes = [
  {path: 'editora', component: EditoraListComponent, canActivate: [AuthGuardService]},
  {path: 'editora/:id/edit', component: EditoraFormComponent, canActivate: [AuthGuardService]},
  {path: 'editora/new', component: EditoraFormComponent, canActivate: [AuthGuardService]}
];

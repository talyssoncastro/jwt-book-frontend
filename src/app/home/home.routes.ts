import {Routes}          from '@angular/router';

import {HomeComponent} from "./home.component";
import {AuthGuardService} from "../auth-guard.service";

export const HomeRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
];

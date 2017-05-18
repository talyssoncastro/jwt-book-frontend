import { Routes }          from '@angular/router';

//import { HomeComponent } from './home/home.component';
import { EditoraRoutes } from './editora/editora.routes';
import { LoginRoutes } from './login/login.routes';
import {LoginComponent} from "./login/login.component";
import {GeneroRoutes} from "./genero/genero.routes";
import {LivroRoutes} from "./livro/livro.routes";

export const routes = [
  ...EditoraRoutes,
  ...GeneroRoutes,
  ...LivroRoutes,
  ...LoginRoutes,
  { path: '', component: LoginComponent }
];

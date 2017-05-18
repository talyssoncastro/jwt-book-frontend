import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";

import {EditoraListComponent} from "./editora/editora-list.component";
import {EditoraFormComponent} from "./editora/editora-form.component";
import {EditoraService} from "./shared/service/editora.service";
import {ConfigService} from "./shared/util/config.service";
import {NotificationService} from "./shared/util/notification.service";
import {LoginComponent} from "./login/login.component";
import {AuthGuardService} from "./auth-guard.service";
import {AuthenticationService} from "./authentication.service";
import {routes} from "./app.routes";
import {GeneroListComponent} from "./genero/genero-list.component";
import {GeneroFormComponent} from "./genero/genero-form.component";
import {LivroListComponent} from "./livro/livro-list.component";
import {LivroFormComponent} from "./livro/livro-form.component";
import {GeneroService} from "./shared/service/genero.service";
import {LivroService} from "./shared/service/livro.service";

@NgModule({
  declarations: [
    AppComponent,
    EditoraListComponent,
    EditoraFormComponent,
    GeneroListComponent,
    GeneroFormComponent,
    LivroListComponent,
    LivroFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ConfigService,
    EditoraService,
    GeneroService,
    LivroService,
    NotificationService,
    AuthGuardService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

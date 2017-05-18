import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../shared/util/notification.service';

import { GeneroService } from '../shared/service/genero.service';
import { IGenero } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'app-genero-list',
  templateUrl: 'genero-list.component.html'
})

export class GeneroListComponent {
  
  generos: IGenero[];

  constructor(private generoService: GeneroService,
              private notificationService: NotificationService) {
    // code...
  }

  ngOnInit() {
    this.loadGeneros();
  }

  loadGeneros() {
    this.generoService.findAll().subscribe((generos:IGenero[])=>{
        this.generos = generos;
        console.log(this.generos);
      },
      error=>{
        console.error("Problemas ao buscar gêneros. " + error);
      }

    );
  }

  remover(genero: IGenero) {
        this.notificationService.openConfirmationDialog('Confirma exclusão de gênero?',
            ()=> {
                this.generoService.delete(genero.id)
                    .subscribe(() => {
                        this.loadGeneros();
                        this.notificationService.printSuccessMessage(genero.nome + ' foi removida!');                        
                    },
                    error=>{
                        this.notificationService.printErrorMessage('Falha ao remover gênero!' + error);
                    })
            }
        );
    }


}
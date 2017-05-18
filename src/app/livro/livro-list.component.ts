import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../shared/util/notification.service';

import { LivroService } from '../shared/service/livro.service';
import { ILivro } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'app-livro-list',
  templateUrl: 'livro-list.component.html'
})

export class LivroListComponent {
  
  livros: ILivro[];

  constructor(private livroService: LivroService,
              private notificationService: NotificationService) {
    // code...
  }

  ngOnInit() {
    this.loadLivros();
  }

  loadLivros() {
    this.livroService.findAll().subscribe((livros:ILivro[])=>{
        this.livros = livros;
      },
      error=>{
        console.error("Problemas ao buscar livros. " + error);
      }

    );
  }

  remover(livro: ILivro) {
        this.notificationService.openConfirmationDialog('Confirma exclusão de livro?',
            ()=> {
                this.livroService.delete(livro.id)
                    .subscribe(() => {
                        this.loadLivros();
                        this.notificationService.printSuccessMessage(livro.titulo + ' foi removida!');
                    },
                    error=>{
                        this.notificationService.printErrorMessage('Falha ao remover livro!' + error);
                    })
            }
        );
    }


}
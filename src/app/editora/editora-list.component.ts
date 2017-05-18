import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../shared/util/notification.service';

import { EditoraService } from '../shared/service/editora.service';
import { IEditora } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'app-editora-list',
  templateUrl: 'editora-list.component.html'
})

export class EditoraListComponent {
  
  editoras: IEditora[];

  constructor(private editoraService: EditoraService,
              private notificationService: NotificationService) {
    // code...
  }

  ngOnInit() {
    this.loadEditoras();
  }

  loadEditoras() {
    this.editoraService.findAll().subscribe((editoras:IEditora[])=>{
        this.editoras = editoras;
      },
      error=>{
        console.error("Problemas ao buscar editoras. " + error);
      }

    );
  }

  remover(editora: IEditora) {
        this.notificationService.openConfirmationDialog('Confirma exclusão de editora?',
            ()=> {
                this.editoraService.delete(editora.id)
                    .subscribe(() => {
                        this.loadEditoras();
                        this.notificationService.printSuccessMessage(editora.nome + ' foi removida!');                        
                    },
                    error=>{
                        this.notificationService.printErrorMessage('Falha ao remover editora!' + error);
                    })
            }
        );
    }


}
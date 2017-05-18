import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import {EditoraService} from '../shared/service/editora.service';
import {NotificationService} from '../shared/util/notification.service';
import {IEditora} from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'app-editora-form',
    templateUrl: 'editora-form.component.html',
})

export class EditoraFormComponent {
  id: number;
  editora: IEditora;
  editoraLoaded: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private editoraService: EditoraService,
              private notificationService: NotificationService) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']; // o caracter '+' converter o valor para um number

    this.id > 0 ? this.loadEditora() : this.newEditora();

  }

  loadEditora(){
    this.editoraService.search(this.id)
      .subscribe((editora:IEditora)=>{
        this.editora = editora;
        this.editoraLoaded = true;
      },
      error=>{
        this.notificationService.printErrorMessage('Falha ao carregar editora!' + error);
      })
  }

  newEditora() {
    var newEditora = {
      id: null,
      nome: ''
    };

    this.editora = newEditora;
    this.editoraLoaded = true;

  }

  saveEditora(editEditoraForm: NgForm) {
    console.log(editEditoraForm.value);

    if (this.editora.id != null) {
      this.editoraService.update(this.editora)
        .subscribe(()=>{
          this.notificationService.printSuccessMessage('Editora atualizada com sucesso!');
          this.back();
        },
        error=>{
          this.notificationService.printErrorMessage('Falha ao atualizar editora.' + error);
        })
    } else {
      this.editoraService.insert(this.editora)
        .subscribe(()=>{
          this.notificationService.printSuccessMessage('Editora inserida com sucesso!');
          this.back();
        },
        error=>{
          this.notificationService.printErrorMessage('Falha ao inserir editora.' + error);
        })
    }
  }

  back() {
    this.router.navigate(['/editora']);
  }

}

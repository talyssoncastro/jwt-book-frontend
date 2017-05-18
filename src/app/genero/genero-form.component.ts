import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import {GeneroService} from '../shared/service/genero.service';
import {NotificationService} from '../shared/util/notification.service';
import {IGenero} from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'app-genero-form',
    templateUrl: 'genero-form.component.html',
})

export class GeneroFormComponent {
  id: number;
  genero: IGenero;
  generoLoaded: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private generoService: GeneroService,
              private notificationService: NotificationService) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']; // o caracter '+' converter o valor para um number

    this.id > 0 ? this.loadGenero() : this.newGenero();

  }

  loadGenero(){
    this.generoService.search(this.id)
      .subscribe((genero: IGenero)=>{
        this.genero = genero;
        this.generoLoaded = true;
      },
      error=>{
        this.notificationService.printErrorMessage('Falha ao carregar gênero!' + error);
      })
  }

  newGenero() {
    var newGenero = {
      id: null,
      nome: ''
    };

    this.genero = newGenero;
    this.generoLoaded = true;

  }

  saveGenero(editGeneroForm: NgForm) {
    console.log(editGeneroForm.value);

    if (this.genero.id != null) {
      this.generoService.update(this.genero)
        .subscribe(()=>{
          this.notificationService.printSuccessMessage('Gênero atualizado com sucesso!');
          this.back();
        },
        error=>{
          this.notificationService.printErrorMessage('Falha ao atualizar gênero.' + error);
        })
    } else {
      this.generoService.insert(this.genero)
        .subscribe(()=>{
          this.notificationService.printSuccessMessage('Gênero inserido com sucesso!');
          this.back();
        },
        error=>{
          this.notificationService.printErrorMessage('Falha ao inserir gênero.' + error);
        })
    }
  }

  back() {
    this.router.navigate(['/genero']);
  }

}

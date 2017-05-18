import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import {LivroService} from '../shared/service/livro.service';
import {EditoraService} from '../shared/service/editora.service';
import {GeneroService} from '../shared/service/genero.service';
import {NotificationService} from '../shared/util/notification.service';
import {ILivro} from '../shared/interfaces';
import {IEditora} from '../shared/interfaces';
import {IGenero} from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'app-livro-form',
    templateUrl: 'livro-form.component.html',
})

export class LivroFormComponent {
  id: number;
  livro: ILivro;
  livroLoaded: boolean = false;

  generos: IGenero[]; // TODO carregar
  editoras: IEditora[]; // TODO carregar

  constructor(private route: ActivatedRoute,
              private router: Router,
              private livroService: LivroService,
              private editoraService: EditoraService,
              private generoService: GeneroService,
              private notificationService: NotificationService) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']; // o caracter '+' converter o valor para um number

    this.loadEditoras();
    this.loadGeneros();
    this.id > 0 ? this.loadLivro() : this.newLivro();

  }

  loadLivro(){
    this.livroService.search(this.id)
      .subscribe((livro: ILivro)=>{
        this.livro = livro;
        this.livroLoaded = true;
      },
      error=>{
        this.notificationService.printErrorMessage('Falha ao carregar Livro!' + error);
      })
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

  loadGeneros() {
    this.generoService.findAll().subscribe((generos:IGenero[])=>{
        this.generos = generos;
      },
      error=>{
        console.error("Problemas ao buscar gêneros. " + error);
      }

    );
  }

  newLivro() {
    var newLivro = {
      id: null,
      titulo: '',
      ano: 0,
      paginas: 0,
      isbn: '',
      editora: {
        id: null,
        nome: ''
      },
      genero: {
        id: null,
        nome: ''
      }
    };

    this.livro = newLivro;
    this.livroLoaded = true;

  }

  saveLivro(editLivroForm: NgForm) {
    console.log(editLivroForm.value);

    if (this.livro.id != null) {
      this.livroService.update(this.livro)
        .subscribe(()=>{
          this.notificationService.printSuccessMessage('Livro atualizado com sucesso!');
          this.back();
        },
        error=>{
          this.notificationService.printErrorMessage('Falha ao atualizar livro.' + error);
        })
    } else {
      this.livroService.insert(this.livro)
        .subscribe(()=>{
          this.notificationService.printSuccessMessage('Livro inserido com sucesso!');
          this.back();
        },
        error=>{
          this.notificationService.printErrorMessage('Falha ao inserir livro.' + error);
        })
    }
  }

  back() {
    this.router.navigate(['/livro']);
  }

}

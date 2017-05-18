"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var livro_service_1 = require('../shared/service/livro.service');
var editora_service_1 = require('../shared/service/editora.service');
var genero_service_1 = require('../shared/service/genero.service');
var notification_service_1 = require('../shared/util/notification.service');
var LivroFormComponent = (function () {
    function LivroFormComponent(route, router, livroService, editoraService, generoService, notificationService) {
        this.route = route;
        this.router = router;
        this.livroService = livroService;
        this.editoraService = editoraService;
        this.generoService = generoService;
        this.notificationService = notificationService;
        this.livroLoaded = false;
    }
    LivroFormComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.params['id']; // o caracter '+' converter o valor para um number
        this.loadEditoras();
        this.loadGeneros();
        this.id > 0 ? this.loadLivro() : this.newLivro();
    };
    LivroFormComponent.prototype.loadLivro = function () {
        var _this = this;
        this.livroService.search(this.id)
            .subscribe(function (livro) {
            _this.livro = livro;
            _this.livroLoaded = true;
        }, function (error) {
            _this.notificationService.printErrorMessage('Falha ao carregar Livro!' + error);
        });
    };
    LivroFormComponent.prototype.loadEditoras = function () {
        var _this = this;
        this.editoraService.findAll().subscribe(function (editoras) {
            _this.editoras = editoras;
        }, function (error) {
            console.error("Problemas ao buscar editoras. " + error);
        });
    };
    LivroFormComponent.prototype.loadGeneros = function () {
        var _this = this;
        this.generoService.findAll().subscribe(function (generos) {
            _this.generos = generos;
        }, function (error) {
            console.error("Problemas ao buscar gêneros. " + error);
        });
    };
    LivroFormComponent.prototype.newLivro = function () {
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
    };
    LivroFormComponent.prototype.saveLivro = function (editLivroForm) {
        var _this = this;
        console.log(editLivroForm.value);
        if (this.livro.id != null) {
            this.livroService.update(this.livro)
                .subscribe(function () {
                _this.notificationService.printSuccessMessage('Livro atualizado com sucesso!');
                _this.back();
            }, function (error) {
                _this.notificationService.printErrorMessage('Falha ao atualizar livro.' + error);
            });
        }
        else {
            this.livroService.insert(this.livro)
                .subscribe(function () {
                _this.notificationService.printSuccessMessage('Livro inserido com sucesso!');
                _this.back();
            }, function (error) {
                _this.notificationService.printErrorMessage('Falha ao inserir livro.' + error);
            });
        }
    };
    LivroFormComponent.prototype.back = function () {
        this.router.navigate(['/livro']);
    };
    LivroFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-livro-form',
            templateUrl: 'livro-form.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, livro_service_1.LivroService, editora_service_1.EditoraService, genero_service_1.GeneroService, notification_service_1.NotificationService])
    ], LivroFormComponent);
    return LivroFormComponent;
}());
exports.LivroFormComponent = LivroFormComponent;
//# sourceMappingURL=livro-form.component.js.map
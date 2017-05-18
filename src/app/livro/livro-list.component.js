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
var notification_service_1 = require('../shared/util/notification.service');
var livro_service_1 = require('../shared/service/livro.service');
var LivroListComponent = (function () {
    function LivroListComponent(livroService, notificationService) {
        this.livroService = livroService;
        this.notificationService = notificationService;
        // code...
    }
    LivroListComponent.prototype.ngOnInit = function () {
        this.loadLivros();
    };
    LivroListComponent.prototype.loadLivros = function () {
        var _this = this;
        this.livroService.findAll().subscribe(function (livros) {
            _this.livros = livros;
        }, function (error) {
            console.error("Problemas ao buscar livros. " + error);
        });
    };
    LivroListComponent.prototype.remover = function (livro) {
        var _this = this;
        this.notificationService.openConfirmationDialog('Confirma exclusão de livro?', function () {
            _this.livroService.delete(livro.id)
                .subscribe(function () {
                _this.loadLivros();
                _this.notificationService.printSuccessMessage(livro.titulo + ' foi removida!');
            }, function (error) {
                _this.notificationService.printErrorMessage('Falha ao remover livro!' + error);
            });
        });
    };
    LivroListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-livro-list',
            templateUrl: 'livro-list.component.html'
        }), 
        __metadata('design:paramtypes', [livro_service_1.LivroService, notification_service_1.NotificationService])
    ], LivroListComponent);
    return LivroListComponent;
}());
exports.LivroListComponent = LivroListComponent;
//# sourceMappingURL=livro-list.component.js.map
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
var genero_service_1 = require('../shared/service/genero.service');
var GeneroListComponent = (function () {
    function GeneroListComponent(generoService, notificationService) {
        this.generoService = generoService;
        this.notificationService = notificationService;
        // code...
    }
    GeneroListComponent.prototype.ngOnInit = function () {
        this.loadGeneros();
    };
    GeneroListComponent.prototype.loadGeneros = function () {
        var _this = this;
        this.generoService.findAll().subscribe(function (generos) {
            _this.generos = generos;
            console.log(_this.generos);
        }, function (error) {
            console.error("Problemas ao buscar gêneros. " + error);
        });
    };
    GeneroListComponent.prototype.remover = function (genero) {
        var _this = this;
        this.notificationService.openConfirmationDialog('Confirma exclusão de gênero?', function () {
            _this.generoService.delete(genero.id)
                .subscribe(function () {
                _this.loadGeneros();
                _this.notificationService.printSuccessMessage(genero.nome + ' foi removida!');
            }, function (error) {
                _this.notificationService.printErrorMessage('Falha ao remover gênero!' + error);
            });
        });
    };
    GeneroListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-genero-list',
            templateUrl: 'genero-list.component.html'
        }), 
        __metadata('design:paramtypes', [genero_service_1.GeneroService, notification_service_1.NotificationService])
    ], GeneroListComponent);
    return GeneroListComponent;
}());
exports.GeneroListComponent = GeneroListComponent;
//# sourceMappingURL=genero-list.component.js.map
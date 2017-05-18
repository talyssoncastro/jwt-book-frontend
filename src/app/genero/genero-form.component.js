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
var genero_service_1 = require('../shared/service/genero.service');
var notification_service_1 = require('../shared/util/notification.service');
var GeneroFormComponent = (function () {
    function GeneroFormComponent(route, router, generoService, notificationService) {
        this.route = route;
        this.router = router;
        this.generoService = generoService;
        this.notificationService = notificationService;
        this.generoLoaded = false;
    }
    GeneroFormComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.params['id']; // o caracter '+' converter o valor para um number
        this.id > 0 ? this.loadGenero() : this.newGenero();
    };
    GeneroFormComponent.prototype.loadGenero = function () {
        var _this = this;
        this.generoService.search(this.id)
            .subscribe(function (genero) {
            _this.genero = genero;
            _this.generoLoaded = true;
        }, function (error) {
            _this.notificationService.printErrorMessage('Falha ao carregar gênero!' + error);
        });
    };
    GeneroFormComponent.prototype.newGenero = function () {
        var newGenero = {
            id: null,
            nome: ''
        };
        this.genero = newGenero;
        this.generoLoaded = true;
    };
    GeneroFormComponent.prototype.saveGenero = function (editGeneroForm) {
        var _this = this;
        console.log(editGeneroForm.value);
        if (this.genero.id != null) {
            this.generoService.update(this.genero)
                .subscribe(function () {
                _this.notificationService.printSuccessMessage('Gênero atualizado com sucesso!');
                _this.back();
            }, function (error) {
                _this.notificationService.printErrorMessage('Falha ao atualizar gênero.' + error);
            });
        }
        else {
            this.generoService.insert(this.genero)
                .subscribe(function () {
                _this.notificationService.printSuccessMessage('Gênero inserido com sucesso!');
                _this.back();
            }, function (error) {
                _this.notificationService.printErrorMessage('Falha ao inserir gênero.' + error);
            });
        }
    };
    GeneroFormComponent.prototype.back = function () {
        this.router.navigate(['/genero']);
    };
    GeneroFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-genero-form',
            templateUrl: 'genero-form.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, genero_service_1.GeneroService, notification_service_1.NotificationService])
    ], GeneroFormComponent);
    return GeneroFormComponent;
}());
exports.GeneroFormComponent = GeneroFormComponent;
//# sourceMappingURL=genero-form.component.js.map
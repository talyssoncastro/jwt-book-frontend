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
var editora_service_1 = require('../shared/service/editora.service');
var notification_service_1 = require('../shared/util/notification.service');
var EditoraFormComponent = (function () {
    function EditoraFormComponent(route, router, editoraService, notificationService) {
        this.route = route;
        this.router = router;
        this.editoraService = editoraService;
        this.notificationService = notificationService;
        this.editoraLoaded = false;
    }
    EditoraFormComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.params['id']; // o caracter '+' converter o valor para um number
        this.id > 0 ? this.loadEditora() : this.newEditora();
    };
    EditoraFormComponent.prototype.loadEditora = function () {
        var _this = this;
        this.editoraService.search(this.id)
            .subscribe(function (editora) {
            _this.editora = editora;
            _this.editoraLoaded = true;
        }, function (error) {
            _this.notificationService.printErrorMessage('Falha ao carregar editora!' + error);
        });
    };
    EditoraFormComponent.prototype.newEditora = function () {
        var newEditora = {
            id: null,
            nome: ''
        };
        this.editora = newEditora;
        this.editoraLoaded = true;
    };
    EditoraFormComponent.prototype.saveEditora = function (editEditoraForm) {
        var _this = this;
        console.log(editEditoraForm.value);
        if (this.editora.id != null) {
            this.editoraService.update(this.editora)
                .subscribe(function () {
                _this.notificationService.printSuccessMessage('Editora atualizada com sucesso!');
                _this.back();
            }, function (error) {
                _this.notificationService.printErrorMessage('Falha ao atualizar editora.' + error);
            });
        }
        else {
            this.editoraService.insert(this.editora)
                .subscribe(function () {
                _this.notificationService.printSuccessMessage('Editora inserida com sucesso!');
                _this.back();
            }, function (error) {
                _this.notificationService.printErrorMessage('Falha ao inserir editora.' + error);
            });
        }
    };
    EditoraFormComponent.prototype.back = function () {
        this.router.navigate(['/editora']);
    };
    EditoraFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-editora-form',
            templateUrl: 'editora-form.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, editora_service_1.EditoraService, notification_service_1.NotificationService])
    ], EditoraFormComponent);
    return EditoraFormComponent;
}());
exports.EditoraFormComponent = EditoraFormComponent;
//# sourceMappingURL=editora-form.component.js.map
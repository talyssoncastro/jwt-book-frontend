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
var editora_service_1 = require('../shared/service/editora.service');
var EditoraListComponent = (function () {
    function EditoraListComponent(editoraService, notificationService) {
        this.editoraService = editoraService;
        this.notificationService = notificationService;
        // code...
    }
    EditoraListComponent.prototype.ngOnInit = function () {
        this.loadEditoras();
    };
    EditoraListComponent.prototype.loadEditoras = function () {
        var _this = this;
        this.editoraService.findAll().subscribe(function (editoras) {
            _this.editoras = editoras;
        }, function (error) {
            console.error("Problemas ao buscar editoras. " + error);
        });
    };
    EditoraListComponent.prototype.remover = function (editora) {
        var _this = this;
        this.notificationService.openConfirmationDialog('Confirma exclusão de editora?', function () {
            _this.editoraService.delete(editora.id)
                .subscribe(function () {
                _this.loadEditoras();
                _this.notificationService.printSuccessMessage(editora.nome + ' foi removida!');
            }, function (error) {
                _this.notificationService.printErrorMessage('Falha ao remover editora!' + error);
            });
        });
    };
    EditoraListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-editora-list',
            templateUrl: 'editora-list.component.html'
        }), 
        __metadata('design:paramtypes', [editora_service_1.EditoraService, notification_service_1.NotificationService])
    ], EditoraListComponent);
    return EditoraListComponent;
}());
exports.EditoraListComponent = EditoraListComponent;
//# sourceMappingURL=editora-list.component.js.map
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
var http_1 = require('@angular/http');
//Grab everything with import 'rxjs/Rx';
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var config_service_1 = require('../util/config.service');
var LivroService = (function () {
    function LivroService(http, configService) {
        this.http = http;
        this.configService = configService;
        this._baseUrl = '';
        this._baseUrl = configService.getApiUri();
    }
    LivroService.prototype.getToken = function () {
        var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        var token = currentUser.token;
        return token ? token : '';
    };
    LivroService.prototype.getHeader = function () {
        var headers = new http_1.Headers({ 'X-Auth-Token': this.getToken() });
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    LivroService.prototype.findAll = function () {
        return this.http.get(this._baseUrl + 'livro/').map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    LivroService.prototype.search = function (id) {
        return this.http.get(this._baseUrl + 'livro/' + id).map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    LivroService.prototype.delete = function (id) {
        return this.http.delete(this._baseUrl + 'livro/' + id).map(function (res) {
            return;
        });
    };
    LivroService.prototype.update = function (livro) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this._baseUrl + 'livro/', JSON.stringify(livro), {
            headers: headers
        }).map(function (res) {
            return;
        }).catch(this.handleError);
    };
    LivroService.prototype.insert = function (livro) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._baseUrl + 'livro/', JSON.stringify(livro), {
            headers: headers
        }).map(function (res) {
            return;
        }).catch(this.handleError);
    };
    LivroService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors = '';
        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable_1.Observable.throw(applicationError || modelStateErrors || 'Server error');
    };
    LivroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], LivroService);
    return LivroService;
}());
exports.LivroService = LivroService;
//# sourceMappingURL=livro.service.js.map
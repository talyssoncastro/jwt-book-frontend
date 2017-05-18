import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ILivro } from '../interfaces';
import { ConfigService } from '../util/config.service';

@Injectable()
export class LivroService {

    _baseUrl: string = '';

    getToken() {
        let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        let token = currentUser.token;
        return token ? token : '';
    }

    getHeader() {
        let headers = new Headers({'X-Auth-Token': this.getToken()});
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});
        return options;
    }

    constructor(private http: Http,
        private configService: ConfigService) {

        this._baseUrl = configService.getApiUri();

    }

    findAll():Observable<ILivro[]> {
        return this.http.get(this._baseUrl + 'livro/', this.getHeader()).map((res:Response)=>{
            return res.json();
        })
        .catch(this.handleError);
    }

    search(id: number):Observable<ILivro> {
        return this.http.get(this._baseUrl + 'livro/' + id, this.getHeader()).map((res:Response)=>{
            return res.json();
        })
        .catch(this.handleError);
    }

    delete(id: number):Observable<void> {
        return this.http.delete(this._baseUrl + 'livro/' + id, this.getHeader()).map((res:Response)=>{
            return;
        });
    }

    update(livro: ILivro):Observable<void> {
        return this.http.put(this._baseUrl + 'livro/', JSON.stringify(livro), this.getHeader()).map((res: Response)=>{
                return;
            }).catch(this.handleError);
    }

    insert(livro: ILivro):Observable<void> {
        return this.http.post(this._baseUrl + 'livro/', JSON.stringify(livro), this.getHeader()).map((res: Response)=>{
                return;
            }).catch(this.handleError);
    }

    private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';

        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }
}

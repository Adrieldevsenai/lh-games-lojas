import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

private url = "http://localhost:3008/produtos"


  constructor(private _httpCliente: HttpClient) { }

getProdutos(): Observable<any>{
  return this._httpCliente.get(this.url)

}

cadastrarProduto(produto: any): Observable<any>{
  return this._httpCliente.post(this.url, produto)
}


}

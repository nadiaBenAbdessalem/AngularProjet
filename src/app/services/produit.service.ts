import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  id;
  catid;
  etat;

  constructor(private http: HttpClient) {

  }

/*  getProduitInStock(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrl + '/produits/listtrue');

  }*/


  getProduitInStock(): Observable <Product[]> {
    return this.http.get<Product[]>(environment.baseUrl + '/produits/listtrue');

  }


  getProductNbr() {
    return this.http.get(environment.baseUrl + '/produits/NbrProduits');
    // return this.http.get(environment.baseUrl + '/users/NbrProduits');
  }

  getProductNbrIn(): Observable<number> {
    return this.http.get<number>(environment.baseUrl + '/produits/NbrProduitsIn');
    //  return this.http.get(environment.baseUrl + '/users/NbrProduitsIn');
  }

  supprimerProduit(id) {
    return this.http.delete(environment.baseUrl + '/produits/supp?id=' + id);
  }

  editerProduit(id, catid, etat, produit) {
    return this.http.put(environment.baseUrl + '/produits/modifier?id=' + id + '&catid=' + catid + '&etat=' + etat, produit);
  }

  ajoutProduit(catid, produit) {
    return this.http.post(environment.baseUrl + '/produits/ajouterById?catid=' + catid, produit);
  }

  getProduitCateg(id) {

    return this.http.get(environment.baseUrl + '/produits/getProduitCateg?id=' + id );

  }
}


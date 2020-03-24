import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ProduitService} from '../../services/produit.service';
import {CategorieService} from '../../services/categorie.service';
import {from} from 'rxjs';
import {filter, map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
nbrUsers;
nbrProducts;
nbrProdIn;
nbrCat;
  constructor(private service: UserService, private serv: ProduitService, private sv: CategorieService) {
    this.getVisitor();
    this.getProduct();
    this.getProdNbrIn();
    this.getCatNbr();
  }

  ngOnInit() {
  }

  getVisitor() {

 /*   const source = from([1, 2, 3, 4, 5]);
    const example = source.pipe(filter(num => num % 2 === 0));
    const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));*/

    this.service.getUserNbr().subscribe(result => {
     console.log('number of visitor:' + result);
     this.nbrUsers = result;
   });
  }

  getProduct() {
    this.serv.getProductNbr().subscribe(result => {
      console.log('number of products:' + result);
      this.nbrProducts = result;
    });
  }

  getProdNbrIn() {
    this.serv.getProductNbrIn()
      .pipe(filter(ress => ress > 0 ),
        map(ress => ress * 2 ))
      .subscribe(result => {
      console.log('number of products in stock:' + result);
      this.nbrProdIn = result;
    });
  }

  getCatNbr() {
    this.sv.getcategNbr().subscribe(result => {
      console.log('number of products category:' + result);
      this.nbrCat = result;
    });
  }
}

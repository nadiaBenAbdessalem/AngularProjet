import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProduitService} from '../../services/produit.service';
import {CategorieService} from '../../services/categorie.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Category} from '../../model/category';
import {filter, map} from 'rxjs/operators';
import {Observable, of, pipe} from 'rxjs';
import {concatMap} from 'rxjs/internal/operators';
@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  id;
  tel;

  authorities;
  catid;
res;
 // listcategorie: Category[];
 listcategorie;
  authen;
  valid;
  produit;
  AjoutForm: FormGroup;
  submitted = false;
  user;
  constructor(private formBuilder: FormBuilder, private router: Router, private service: ProduitService, private serv: CategorieService) {

    this.getCategorie();

  }

  ngOnInit() {
    this.AjoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', [Validators.required]],
      listcategorie: ['']
    });
  }

  get f() { return this.AjoutForm.controls; }


  ajout() {
    this.submitted = true;

    if (this.AjoutForm.invalid) {
      return;
    }
    console.log('category id', this.listcategorie['0'].catid);
    console.log('values', this.AjoutForm.value);


    this.service.ajoutProduit(this.listcategorie['0'].catid, this.AjoutForm.value).subscribe(res => {

      console.log('result --------->', res);
      this.submitted = false;
      this.AjoutForm.reset();

    });

    Swal.fire(
      'Ajouté!',
      'produit ajouté avec succes',
      'success'
    );

    this.router.navigate(['/listProduit']);
  }

 /*getCategorie() {

    this.serv.getCategories().subscribe(result => {
      console.log('liste category', result);
      this.listcategorie = result;
    });
  }*/



 /* getCategorie() {
  this.serv.getCategories()
    .subscribe(result => {
      console.log('liste categories..............', result);
      this.listcategorie = result.filter(re => re.catid === 1);

    });


  }*/


 /*  getCategorie() {
    this.serv.getCategories()
      .subscribe(result => {
        console.log('liste categories..............', result);
        this.listcategorie = result .filter(re => re.catname.startsWith('p'));

      });


  }*/

  getCategorie() {
    this.serv.getCategories()
      .subscribe(result => {
        console.log('liste categories..............', result);
        this.listcategorie = result .filter(re => re.catname.startsWith('p'));

      });


  }


  annulerAjout() {
    this.router.navigate(['/listProduit']);
    }
}

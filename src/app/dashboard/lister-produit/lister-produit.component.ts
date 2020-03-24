import {Component, OnInit, ViewChild} from '@angular/core';
import {ProduitService} from '../../services/produit.service';
import {CategorieService} from '../../services/categorie.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {ChilddComponent} from '../../childd/childd.component';

@Component({
  selector: 'app-lister-produit',
  templateUrl: './lister-produit.component.html',
  styleUrls: ['./lister-produit.component.css']
})
export class ListerProduitComponent implements OnInit {
// listProduits: Product[];

  listProduits;

// llistcategorie: Category[];
  category;
  listcategorie;

id;
etat;
description;
prix;
name;
EditForm: FormGroup;
submitted = false;
data;
  constructor(private formBuilder: FormBuilder, private service: ProduitService, private serv: CategorieService, private router: Router) {
    this.afficher();
    this.getCategories();
  }

  ngOnInit() {

    this.EditForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', [Validators.required]],
      listcategorie: ['']
    });

  }

  afficher() {

    this.service.getProduitInStock().subscribe(result => {
      console.log('liste produit en stock:' + result);
      this.listProduits = result;
    });
  }


  supprimer(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {

      if (result.value) {
    this.service.supprimerProduit(id).subscribe(res => {
      console.log('done');
      this.afficher();
    });


    Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );

      }
    });

  }

  modifier() {
    this.submitted = true;
    console.log('id', this.id);
    this.service.getProduitCateg(this.id).subscribe(result => {
      const data = JSON.parse(JSON.stringify(result)).catid;
      localStorage.setItem('idcateg', data);
      console.log('dataaaa', data);

    });

    console.log ('local storage', JSON.parse(localStorage.getItem('idcateg')));
    this.service.editerProduit(this.id, JSON.parse(localStorage.getItem('idcateg')) , 1, this.EditForm.value).subscribe(res => {

      console.log(res);
      this.submitted = false;
      this.EditForm.reset();
      this.afficher();
      localStorage.clear();
    });

    Swal.fire(
      'updated!',
      'product updated with succes',
      'success'
    );

    this.router.navigate(['/listProduit']);

  }


  getCategories() {
    this.serv.getCategories().subscribe(result => {
    console.log('categories...............' + result);
    this.listcategorie = result;
    });
 }


 /* getProduitCategory(id) {
    console.log('id iiiis', id);
    this.service.getProduitCateg(id).subscribe(result => {
      const data = JSON.parse(JSON.stringify(result)).catid;
      console.log('dataaaa', data);
      this.category = data;
    });
  }*/


  recupere(id, name, description, prix) {
    this.id = id;
    this.EditForm.get('name').setValue(name);
    this.EditForm.get('description').setValue(description);

    this.EditForm.get('prix').setValue(prix);

  }




}

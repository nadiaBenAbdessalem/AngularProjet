import {Category} from './category';

export class Product {
 /* private id: number;
  private description: string;
  private name: string;
  private prix: string;
  private etat: boolean;
  private category: Category;*/

  get id(): number {
    return this.id;
  }

  set id(value: number) {
    this.id = value;
  }

  get description(): string {
    return this.description;
  }

  set description(value: string) {
    this.description = value;
  }

  get name(): string {
    return this.name;
  }

  set name(value: string) {
    this.name = value;
  }

  get prix(): string {
    return this.prix;
  }

  set prix(value: string) {
    this.prix = value;
  }

  get etat(): boolean {
    return this.etat;
  }

  set etat(value: boolean) {
    this.etat = value;
  }

  get category(): Category {
    return this.category;
  }

  set category(value: Category) {
    this.category = value;
  }
}

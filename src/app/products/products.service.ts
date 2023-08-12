import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Product } from './product';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly selectedProd!: Product;

  prodCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  prodDocument!: AngularFirestoreDocument<Product>;
  private prodInfoSource=  new BehaviorSubject('def');
  currProdInfo = this.prodInfoSource.asObservable();

  constructor(public afs: AngularFirestore, private router: Router) {
    this.prodCollection = this.afs.collection('Products', (ref) =>
      ref.orderBy('price', 'desc')
    );
    this.prodCollection = this.afs.collection('Products', (ref) =>
      ref.orderBy('price', 'asc')
    );
    this.prodCollection = this.afs.collection('Products', (ref) =>
      ref.orderBy('name', 'asc')
    );
    this.products = this.prodCollection.snapshotChanges().pipe(
      map((change) => {
        return change.map((y) => {
          const data = y.payload.doc.data() as Product;
          data.id = y.payload.doc.id;
          return data;
        });
      })
    );
  }
  
  change(prodInfo:any){
    this.prodInfoSource.next(prodInfo)
  }

  getAll() {
    return this.products;
  }

  addProd(product: Product) {
    this.prodCollection.add(product).then(() => {
      this.router.navigate(['/products']);
    });
  }

  editProduct(product: Product) {
    this.prodDocument = this.afs.doc(`Products/${product.id}`);
    this.prodDocument.update(product).then(() => {
      this.router.navigate(['/products']);
    });
  }

  delete(product: Product) {
    this.prodDocument = this.afs.doc(`Products/${product.id}`);
    this.prodDocument.delete().then(() => {
      this.router.navigate(['/products']);
    });
  }

  select(product:Product){
(this as any).selectedProd = product;
  }
}

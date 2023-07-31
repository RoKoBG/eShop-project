import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Article } from './article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private afs: AngularFirestore) {}

  //Add article
  addArticle(article: Article) {
    article.id = this.afs.createId();
    return this.afs.collection('/Articles').add(article);
  }

  // All article

  getAllArticles() {
    return this.afs.collection('/Articles').snapshotChanges();
  }
  //Delete
  deleteArticle(article: Article) {
    return this.afs.doc('/Articles/' + article.id).delete();
  }

  //Edit
  editArticle(article: Article) {
    this.deleteArticle(article);
    this.addArticle(article);
  }
}

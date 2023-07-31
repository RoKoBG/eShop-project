import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged, user } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Article } from 'src/app/articles/article';
import { ArticleService } from 'src/app/articles/article.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  articleList: Article[] = [];
  articleObj: Article = {
    id: '',
    name: '',
    text: '',
  };
  id: string = '';
  name: string = '';
  text: string = '';

  constructor(
    private auth: AuthService,
    private articleService: ArticleService
  ) {}

  user = JSON.parse(localStorage.getItem('user')!);

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles() {
    this.articleService.getAllArticles().subscribe(
      (res) => {
        this.articleList = res.map((e: any) => {
          const article = e.payload.doc.data();
          article.id = e.payload.doc.id;
          return article;
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
resForm(){
  this.id = '';
  this.name = '';
  this.text = '';
}
  addArticle() {
    if (this.name == '' || this.text == '') {
      alert('Please fill up all of the inputs!');
    }
    this.articleObj.id = '';
    this.articleObj.name = this.name;
    this.articleObj.text = this.text;
    this.articleService.addArticle(this.articleObj);
    this.resForm();
  }
  editArticle() {}

  deleteArticle(article: Article) {
    if (
      window.confirm('Are you sure you want to delete article' + article.name)
    ) {
      this.articleService.deleteArticle(article);
    }
  }
}

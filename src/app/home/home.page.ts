import {Component, OnInit} from '@angular/core';
import {WikipediaArticleService} from '../shared/services/wikipedia-article.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  wikipediaArticle: string;

  constructor(private wikipediaService: WikipediaArticleService) {
  }

  ngOnInit(): void {
    this.loadNewArticle();
  }

  loadNewArticle() {
    this.wikipediaService.getRandomArticle().subscribe(article => {
      this.wikipediaArticle = article;
    }, error => this.wikipediaArticle = error.message);
  }

}

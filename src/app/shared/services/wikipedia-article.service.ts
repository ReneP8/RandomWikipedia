import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaArticleService {

  wikipediaUrl = 'https://de.wikipedia.org/api/rest_v1/page/random/html';

  constructor(private http: HttpClient) { }

  getRandomArticle(): Observable<any> {
    return this.http.get(this.wikipediaUrl, {responseType: 'text'});
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }
  public get(){
    return this.http.get('https://localhost:7083/api/articles')
  }
  public add(form:any)
  {
    return this.http.post('https://localhost:7083/api/articles',form)
  }
  // public delete(id:number)
  // {
  //   return this.http.delete('https://localhost:7083/api/articles',id)
  // }
  // public update(id:number)
  // {
  //   return this.http.update('https://localhost:7083/api/articles',id)
  // }
}

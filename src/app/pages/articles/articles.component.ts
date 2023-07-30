import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/articles.service';

@Component({
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  model : any;
  form : any;
constructor(
private articlesService : ArticlesService
) { }

ngOnInit(): void {
this.articlesService.get().subscribe(data => this.model = data)
this.articlesService.add(this.form).subscribe(data => this.form = data)
}



}

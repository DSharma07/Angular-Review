import { Component, OnInit } from '@angular/core';

import { AuthorService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorService]
})
export class AuthorListComponent implements OnInit {
    authors: string[];

    constructor(private authorService: AuthorService) {}

    getAuthors(): void {
      this.authors = this.authorService.getAuthors();//.then(authors => this.authors = authors);
    }
  
    ngOnInit(): void {
      this.getAuthors();
    }

}

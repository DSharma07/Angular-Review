import { Injectable } from '@angular/core';
import { AUTHORS } from './mock-authors';

@Injectable()
export class AuthorService {
  getAuthors() {
    return AUTHORS;
  }
}
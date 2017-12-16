import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListComponent } from './author-list.component';
import { AuthorService } from './authors.service';

const fakedData = ["Author1", "Author2"];

describe('AuthorsComponent', () => {
  let component: AuthorListComponent;
  let service : AuthorService;
  let fixture: ComponentFixture<AuthorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorListComponent);
    component = fixture.componentInstance;
    service = new AuthorService;
    fixture.detectChanges();
  });

  it('should create', () => {
    let list = service.getAuthors();
    expect(list).toContain(fakedData[1]);
  });
});

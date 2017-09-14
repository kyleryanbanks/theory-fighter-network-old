import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotebookPageComponent } from './add-notebook-page.component';

describe('AddNotebookPageComponent', () => {
  let component: AddNotebookPageComponent;
  let fixture: ComponentFixture<AddNotebookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotebookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotebookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

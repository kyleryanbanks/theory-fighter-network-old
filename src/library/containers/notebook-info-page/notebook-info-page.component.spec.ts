import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookInfoPageComponent } from './notebook-info-page.component';

describe('NotebookInfoPageComponent', () => {
  let component: NotebookInfoPageComponent;
  let fixture: ComponentFixture<NotebookInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

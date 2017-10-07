import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookInterfaceComponent } from './notebook-interface.component';

describe('NotebookInterfaceComponent', () => {
  let component: NotebookInterfaceComponent;
  let fixture: ComponentFixture<NotebookInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

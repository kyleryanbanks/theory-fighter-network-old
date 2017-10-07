import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShelfPageComponent } from './add-shelf-page.component';

describe('AddShelfPageComponent', () => {
  let component: AddShelfPageComponent;
  let fixture: ComponentFixture<AddShelfPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShelfPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShelfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

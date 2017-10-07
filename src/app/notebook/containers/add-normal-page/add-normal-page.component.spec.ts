import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNormalPageComponent } from './add-normal-page.component';

describe('AddNormalPageComponent', () => {
  let component: AddNormalPageComponent;
  let fixture: ComponentFixture<AddNormalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNormalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNormalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

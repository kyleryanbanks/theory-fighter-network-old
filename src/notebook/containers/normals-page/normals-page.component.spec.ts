import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalsPageComponent } from './normals-page.component';

describe('NormalsPageComponent', () => {
  let component: NormalsPageComponent;
  let fixture: ComponentFixture<NormalsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

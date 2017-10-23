import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickButtonsComponent } from './stick-buttons.component';

describe('StickButtonsComponent', () => {
  let component: StickButtonsComponent;
  let fixture: ComponentFixture<StickButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

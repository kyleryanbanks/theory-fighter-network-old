import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSpeedDialComponent } from './lib-speed-dial.component';

describe('LibSpeedDialComponent', () => {
  let component: LibSpeedDialComponent;
  let fixture: ComponentFixture<LibSpeedDialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibSpeedDialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibSpeedDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

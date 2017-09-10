import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverCardComponent } from './cover-card.component';

describe('CoverCardComponent', () => {
  let component: CoverCardComponent;
  let fixture: ComponentFixture<CoverCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

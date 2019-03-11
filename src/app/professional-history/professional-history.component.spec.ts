import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalHistoryComponent } from './professional-history.component';

describe('ProfessionalHistoryComponent', () => {
  let component: ProfessionalHistoryComponent;
  let fixture: ComponentFixture<ProfessionalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelBarComponent } from './skill-level-bar.component';

describe('SkillLevelBarComponent', () => {
  let component: SkillLevelBarComponent;
  let fixture: ComponentFixture<SkillLevelBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillLevelBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillLevelBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

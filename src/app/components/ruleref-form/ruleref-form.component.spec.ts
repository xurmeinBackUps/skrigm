import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulerefFormComponent } from './ruleref-form.component';

describe('RulerefFormComponent', () => {
  let component: RulerefFormComponent;
  let fixture: ComponentFixture<RulerefFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulerefFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulerefFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

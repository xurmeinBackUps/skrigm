import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulerefComponent } from './ruleref.component';

describe('RulerefComponent', () => {
  let component: RulerefComponent;
  let fixture: ComponentFixture<RulerefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulerefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulerefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

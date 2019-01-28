import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oops404Component } from './oops404.component';

describe('Oops404Component', () => {
  let component: Oops404Component;
  let fixture: ComponentFixture<Oops404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oops404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oops404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

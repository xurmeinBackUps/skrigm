import { TestBed } from '@angular/core/testing';

import { CrudRulerefService } from './crud-ruleref.service';

describe('CrudRulerefService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudRulerefService = TestBed.get(CrudRulerefService);
    expect(service).toBeTruthy();
  });
});

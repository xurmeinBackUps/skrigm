import { TestBed } from '@angular/core/testing';

import { CrudRuleService } from './crud-rule.service';

describe('CrudRuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudRuleService = TestBed.get(CrudRuleService);
    expect(service).toBeTruthy();
  });
});

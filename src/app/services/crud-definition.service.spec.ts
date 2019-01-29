import { TestBed } from '@angular/core/testing';

import { CrudDefinitionService } from './crud-definition.service';

describe('CrudDefinitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudDefinitionService = TestBed.get(CrudDefinitionService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CrudPanelService } from './crud-panel.service';

describe('CrudPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudPanelService = TestBed.get(CrudPanelService);
    expect(service).toBeTruthy();
  });
});

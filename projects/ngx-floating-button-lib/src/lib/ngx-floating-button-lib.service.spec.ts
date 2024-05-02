import { TestBed } from '@angular/core/testing';

import { NgxFloatingButtonLibService } from './ngx-floating-button-lib.service';

describe('NgxFloatingButtonLibService', () => {
  let service: NgxFloatingButtonLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFloatingButtonLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

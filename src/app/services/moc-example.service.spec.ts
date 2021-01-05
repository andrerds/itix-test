import { TestBed } from '@angular/core/testing';

import { MocExampleService } from './moc-example.service';

describe('MocExampleService', () => {
  let service: MocExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MocExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

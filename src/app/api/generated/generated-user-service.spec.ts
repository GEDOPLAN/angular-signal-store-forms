import { TestBed } from '@angular/core/testing';
import { GeneratedUserService } from './generated-user-service';

describe('GeneratedUserService', () => {
  let service: GeneratedUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratedUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

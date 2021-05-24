import { TestBed } from '@angular/core/testing';

import { AccountBookService } from './account-book.service';

describe('AccountBookService', () => {
  let service: AccountBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ChatsignalrService } from './chatsignalr.service';

describe('ChatsignalrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatsignalrService = TestBed.get(ChatsignalrService);
    expect(service).toBeTruthy();
  });
});

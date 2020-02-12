import { TestBed } from '@angular/core/testing';

import { ChatReqionServiceService } from './char-reqion-service.service';

describe('CharReqionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatReqionServiceService = TestBed.get(ChatReqionServiceService);
    expect(service).toBeTruthy();
  });
});

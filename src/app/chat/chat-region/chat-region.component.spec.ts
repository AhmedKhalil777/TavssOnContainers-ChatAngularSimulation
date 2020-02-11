import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRegionComponent } from './chat-region.component';

describe('ChatRegionComponent', () => {
  let component: ChatRegionComponent;
  let fixture: ComponentFixture<ChatRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

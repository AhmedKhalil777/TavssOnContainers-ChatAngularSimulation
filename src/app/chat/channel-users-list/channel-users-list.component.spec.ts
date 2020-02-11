import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelUsersListComponent } from './channel-users-list.component';

describe('ChannelUsersListComponent', () => {
  let component: ChannelUsersListComponent;
  let fixture: ComponentFixture<ChannelUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

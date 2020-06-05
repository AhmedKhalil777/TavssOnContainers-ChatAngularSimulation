import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdesignComponent } from './testdesign.component';

describe('TestdesignComponent', () => {
  let component: TestdesignComponent;
  let fixture: ComponentFixture<TestdesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

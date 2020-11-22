import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestItemComponent } from './new-request-item.component';

describe('NewRequestItemComponent', () => {
  let component: NewRequestItemComponent;
  let fixture: ComponentFixture<NewRequestItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRequestItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRequestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

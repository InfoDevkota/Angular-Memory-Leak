import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserItemComponent } from './new-user-item.component';

describe('NewUserItemComponent', () => {
  let component: NewUserItemComponent;
  let fixture: ComponentFixture<NewUserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

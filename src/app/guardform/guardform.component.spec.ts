import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardformComponent } from './guardform.component';

describe('GuardformComponent', () => {
  let component: GuardformComponent;
  let fixture: ComponentFixture<GuardformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

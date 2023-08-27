import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal5Component } from './modal5.component';

describe('Modal5Component', () => {
  let component: Modal5Component;
  let fixture: ComponentFixture<Modal5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modal5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modal5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

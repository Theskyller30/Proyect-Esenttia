import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CediComponent } from './cedi.component';

describe('CediComponent', () => {
  let component: CediComponent;
  let fixture: ComponentFixture<CediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CediComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

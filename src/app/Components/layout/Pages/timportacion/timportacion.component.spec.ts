import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimportacionComponent } from './timportacion.component';

describe('TimportacionComponent', () => {
  let component: TimportacionComponent;
  let fixture: ComponentFixture<TimportacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimportacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimportacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

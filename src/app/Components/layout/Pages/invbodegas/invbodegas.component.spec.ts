import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvbodegasComponent } from './invbodegas.component';

describe('InvbodegasComponent', () => {
  let component: InvbodegasComponent;
  let fixture: ComponentFixture<InvbodegasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvbodegasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvbodegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

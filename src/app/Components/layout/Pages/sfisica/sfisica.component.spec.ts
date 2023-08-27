import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfisicaComponent } from './sfisica.component';

describe('SfisicaComponent', () => {
  let component: SfisicaComponent;
  let fixture: ComponentFixture<SfisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfisicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

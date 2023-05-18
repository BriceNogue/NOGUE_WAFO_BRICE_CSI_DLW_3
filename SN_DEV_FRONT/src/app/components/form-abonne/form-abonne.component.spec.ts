import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAbonneComponent } from './form-abonne.component';

describe('FormAbonneComponent', () => {
  let component: FormAbonneComponent;
  let fixture: ComponentFixture<FormAbonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAbonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

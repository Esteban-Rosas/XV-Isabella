import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalMensajeComponent } from './final-mensaje.component';

describe('FinalMensajeComponent', () => {
  let component: FinalMensajeComponent;
  let fixture: ComponentFixture<FinalMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalMensajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

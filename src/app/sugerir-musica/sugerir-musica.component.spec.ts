import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerirMusicaComponent } from './sugerir-musica.component';

describe('SugerirMusicaComponent', () => {
  let component: SugerirMusicaComponent;
  let fixture: ComponentFixture<SugerirMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugerirMusicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugerirMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

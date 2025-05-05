import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramHashtagComponent } from './instagram-hashtag.component';

describe('InstagramHashtagComponent', () => {
  let component: InstagramHashtagComponent;
  let fixture: ComponentFixture<InstagramHashtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramHashtagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramHashtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

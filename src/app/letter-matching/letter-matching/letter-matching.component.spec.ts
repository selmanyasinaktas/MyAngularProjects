import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterMatchingComponent } from './letter-matching.component';

describe('LetterMatchingComponent', () => {
  let component: LetterMatchingComponent;
  let fixture: ComponentFixture<LetterMatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LetterMatchingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

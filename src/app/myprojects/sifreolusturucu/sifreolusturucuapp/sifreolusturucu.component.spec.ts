import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SifreolusturucuComponent } from './sifreolusturucu.component';

describe('SifreolusturucuComponent', () => {
  let component: SifreolusturucuComponent;
  let fixture: ComponentFixture<SifreolusturucuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SifreolusturucuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SifreolusturucuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

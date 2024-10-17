import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelesComponent } from './niveles.component';

describe('NivelesComponent', () => {
  let component: NivelesComponent;
  let fixture: ComponentFixture<NivelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

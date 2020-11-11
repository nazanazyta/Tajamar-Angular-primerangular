import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumarnumerosComponent } from './sumarnumeros.component';

describe('SumarnumerosComponent', () => {
  let component: SumarnumerosComponent;
  let fixture: ComponentFixture<SumarnumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumarnumerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumarnumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

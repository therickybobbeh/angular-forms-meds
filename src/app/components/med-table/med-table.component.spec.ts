import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedTableComponent } from './med-table.component';

describe('MedTableComponent', () => {
  let component: MedTableComponent;
  let fixture: ComponentFixture<MedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

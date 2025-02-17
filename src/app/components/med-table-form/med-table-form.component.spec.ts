import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedTableFormComponent } from './med-table-form.component';

describe('MedTableFormComponent', () => {
  let component: MedTableFormComponent;
  let fixture: ComponentFixture<MedTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedTableFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

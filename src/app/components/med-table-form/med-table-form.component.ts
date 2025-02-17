import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Medicine, MedicineFormGroup } from '../../models/medicine';
import { MedTableComponent } from '../med-table/med-table.component';
import { MedServiceService } from '../../services/med-service.service';

@Component({
  selector: 'app-med-table-form',
  imports: [
    MedTableComponent,
    ReactiveFormsModule
  ],
  templateUrl: './med-table-form.component.html',
  styleUrls: ['./med-table-form.component.css']
})
export class MedTableFormComponent implements OnInit {
  medicineForm!: FormGroup;

  constructor(private fb: FormBuilder, private medicineFormService: MedServiceService) {}

  ngOnInit(): void {
    this.medicineForm = this.fb.group({
      medicines: this.fb.array([])
    });
    this.loadMedicineData();
  }

  get formArray(): FormArray {
    return this.medicineForm.get('medicines') as FormArray;
  }

  loadMedicineData(): void {
    const medicineData: Medicine[] = [
      {
        name: 'Aspirin',
        dosage: '500mg',
        frequency: 'Twice a day',
        brands: [
          { name: 'Brand A', id: '1', code: 'A1' },
          { name: 'Brand B', id: '2', code: 'B1' },
          { name: 'Brand C', id: '3', code: 'C1' }
        ]
      },
      {
        name: 'Ibuprofen',
        dosage: '200mg',
        frequency: 'Three times a day',
        brands: [
          { name: 'Brand X', id: '4', code: 'X1' },
          { name: 'Brand Y', id: '5', code: 'Y1' },
          { name: 'Brand Z', id: '6', code: 'Z1' }
        ]
      }
    ];

    medicineData.forEach(medicine => {
      const medicineFormGroup: MedicineFormGroup = this.medicineFormService.createMedicineForm();
      medicineFormGroup.patchValue(medicine);
      this.formArray.push(medicineFormGroup);
    });
  }

  onSubmit(): void {
    if (this.medicineForm.valid) {
      console.log('Form Submitted', this.medicineForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

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
  originalState: Medicine[] = [];

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

  //simulate loading data from an API
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

    // store original state for undo functionality
    this.originalState = JSON.parse(JSON.stringify(medicineData));

    // push each medicine into the form array
    medicineData.forEach(medicine => {
      const medicineFormGroup: MedicineFormGroup = this.medicineFormService.createMedicineForm(medicine);
      this.formArray.push(medicineFormGroup);
    });
  }

  // will take the original stat, find the reffed index and set it back to the original
  // this approach will only work with 1 undo at a time
  undoChanges(index: number): void {
    const originalMedicine = this.originalState[index];
    const medicineFormGroup = this.medicineFormService.createMedicineForm(originalMedicine);
    this.formArray.setControl(index, medicineFormGroup);
  }

  onSubmit(): void {
    if (this.medicineForm.valid) {
      console.log('Form Submitted', this.medicineForm.value);
    } else {
      console.log('Form is invalid');
    }
    //may need to update the original state here
  }
}

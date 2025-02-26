import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Medicine, Brands } from '../models/medicine';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedServiceService {
  medicineForm!: FormGroup;
  originalState: Medicine[] = [];

  constructor(private fb: FormBuilder) {}

  initializeForm(): void {
    this.medicineForm = this.fb.group({
      medicines: this.fb.array([])
    });
    this.loadMedicineData();
  }

  loadMedicineData(): void {
    const medicineData: Medicine[] = [
      {
        name: 'Aspirin',
        dosage: '500mg',
        frequency: 'Twice a day',
        options: ['Option 1', 'Option 2'],
        actions: false,
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
        options: ['Option 1', 'Option 2'],
        actions: true,
        brands: [
          { name: 'Brand X', id: '4', code: 'X1' },
          { name: 'Brand Y', id: '5', code: 'Y1' },
          { name: 'Brand Z', id: '6', code: 'Z1' }
        ]
      },
      {
        name: 'Paracetamol',
        dosage: '500mg',
        frequency: 'Once a day',
        options: ['Option 1', 'Option 2'],
        actions: false,
        brands: [
          { name: 'Brand D', id: '7', code: 'D1' },
          { name: 'Brand E', id: '8', code: 'E1' }
        ]
      },
      {
        name: 'Amoxicillin',
        dosage: '250mg',
        frequency: 'Twice a day',
        options: ['Option 1', 'Option 2'],
        actions: true,
        brands: [
          { name: 'Brand F', id: '9', code: 'F1' },
          { name: 'Brand G', id: '10', code: 'G1' }
        ]
      },
      {
        name: 'Metformin',
        dosage: '500mg',
        frequency: 'Once a day',
        options: ['Option 1', 'Option 2'],
        actions: false,
        brands: [
          { name: 'Brand H', id: '11', code: 'H1' },
          { name: 'Brand I', id: '12', code: 'I1' }
        ]
      },
      {
        name: null,
        dosage: null,
        frequency: null,
        options: null,
        actions: null,
        brands: null
      },
      {
        name: '',
        dosage: '20mg',
        frequency: 'Once  day',
        options: ['Option 1', 'Option 2'],
        actions: false,
        brands: [
          { name: 'Brand L', id: '15', code: 'L1' },
          { name: 'Brand M', id: '16', code: 'M1' }
        ]
      }
    ];
    // store original state for undo functionality
    this.originalState = JSON.parse(JSON.stringify(medicineData));

    // push each medicine into the form array
    medicineData.forEach(medicine => {
      const medicineFormGroup = this.createMedicineForm(medicine);
      this.formArray.push(medicineFormGroup);
    });
  }

  get formArray(): FormArray {
    return this.medicineForm.get('medicines') as FormArray;
  }

  createMedicineForm(medicine?: Medicine): FormGroup {
    const brandsFormArray: FormArray = this.fb.array(
      (medicine?.brands || []).map(brand => this.createBrandForm(brand))
    );

    return this.fb.group({
      name: [medicine?.name || '', Validators.required],
      dosage: [medicine?.dosage || '', Validators.required],
      frequency: [medicine?.frequency || '', Validators.required],
      options: [medicine?.options || []], // Ensure this is an array
      selectedOption: [medicine?.options ? medicine.options[0] : ''], // New form control for selected option
      actions: [medicine?.actions || false],
      brands: brandsFormArray
    });
  }

  createBrandForm(brand?: Brands): FormGroup {
    return this.fb.group({
      name: [brand?.name || '', Validators.required],
      id: [brand?.id || '', Validators.required],
      code: [brand?.code || '', Validators.required]
    });
  }
}

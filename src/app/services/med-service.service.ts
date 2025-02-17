import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Medicine, Brands} from '../models/medicine';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MedServiceService {
  constructor(private fb: FormBuilder) {}

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

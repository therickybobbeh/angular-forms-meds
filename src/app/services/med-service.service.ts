import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedServiceService {
  constructor(private fb: FormBuilder) {}

  createMedicineForm(medicine?: Medicine): FormGroup {
    const brandsFormArray: FormArray = this.fb.array([]);
    if (medicine && medicine.brands) {
      medicine.brands.forEach(brand => {
        brandsFormArray.push(this.createBrandForm(brand));
      });
    }

    return this.fb.group({
      name: [medicine?.name || '', Validators.required],
      dosage: medicine?.dosage || '',
      frequency: medicine?.frequency || '',
      brands: brandsFormArray
    });
  }

  createBrandForm(brand?: { name: string; id: string; code: string }): FormGroup {
    return this.fb.group({
      name: [brand?.name || '', Validators.required],
      id: brand?.id || '',
      code: brand?.code || ''
    });
  }
}

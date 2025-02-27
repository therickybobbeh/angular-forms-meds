import { FormControl, FormGroup, FormArray } from '@angular/forms';

export interface Medicine {
  name: string | null;
  dosage: string | null;
  frequency: string| null;
  options: string[] | null;
  actions: boolean | null;
  brands: Brands[] | null;
}

export interface Brands {
  name: string;
  id: string;
  code: string;
}

// export interface MedicineForm {
//   name: FormControl<string>;
//   dosage: FormControl<string>;
//   frequency: FormControl<string>;
//   brands: FormArray<FormGroup<BrandForm>>;
// }
//
// export interface BrandForm {
//   name: FormControl<string>;
//   id: FormControl<string>;
//   code: FormControl<string>;
// }
//
// export type MedicineFormGroup = FormGroup<MedicineForm>;

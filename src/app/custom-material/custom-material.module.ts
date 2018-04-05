import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatFormFieldModule]
})
export class CustomMaterialModule { }

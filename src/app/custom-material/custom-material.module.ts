import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatMenuModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatMenuModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatMenuModule]
})
export class CustomMaterialModule { }

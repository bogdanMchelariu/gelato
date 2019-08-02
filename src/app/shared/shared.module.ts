import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, MaterialModule]
})
export class SharedModule {}

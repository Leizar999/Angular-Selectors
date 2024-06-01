import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CountriesRoutingModule } from './countries-routing.module';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';



@NgModule({
  declarations: [
    SelectorPageComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    CountriesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    SelectorPageComponent
  ]
})
export class CountriesModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberSliderComponent } from './components/NumberSlider/NumberSlider.component';
@NgModule({
  imports: [CommonModule],
  exports: [NumberSliderComponent],
  declarations: [NumberSliderComponent],
})
export class NumberSliderModule {}

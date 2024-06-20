import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [PhonePipe],
  exports: [PhonePipe],
})
export class PipesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,  
    NgChartsModule,
    LineChartModule,
    SharedModule,
  ]
})
export class LineChartModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DonutChartComponent} from "./donut-chart/donut-chart.component";
import { UserListComponent } from './user-list/user-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgApexchartsModule} from "ng-apexcharts";



@NgModule({
  declarations: [
    DonutChartComponent,
    UserListComponent
  ],
  exports: [
    DonutChartComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }

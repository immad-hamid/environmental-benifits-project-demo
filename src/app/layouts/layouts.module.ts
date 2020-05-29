import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts.routing.module';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';

@NgModule({
  declarations: [BasicLayoutComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }

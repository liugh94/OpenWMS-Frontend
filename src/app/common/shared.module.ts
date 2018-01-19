import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { NgxEchartsModule } from 'ngx-echarts';

import { EventBusService } from './services/event-bus.service';
import { WarehouseService } from './services/warehouse.service';
import { VendorService } from './services/vendor.service';
import { StaffService } from './services/staff.service';
import { CustomerService } from './services/customer.service';
import { CategoryService } from './services/category.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    TranslateModule
  ],
  declarations: [
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxEchartsModule
  ],
  providers: [
    EventBusService,
    WarehouseService,
    VendorService,
    StaffService,
    CustomerService,
    CategoryService
  ]
})

export class SharedModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { SectionModule } from 'src/app/section/section.module';


@NgModule({
    declarations: [ServiceComponent],
    imports: [
        CommonModule,
        ServiceRoutingModule,

        SectionModule
    ]
})
export class ServiceModule { }

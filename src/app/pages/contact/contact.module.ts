import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SectionModule } from 'src/app/section/section.module';


@NgModule({
    declarations: [ContactComponent],
    imports: [
        CommonModule,
        ContactRoutingModule,

        SectionModule
    ]
})
export class ContactModule { }

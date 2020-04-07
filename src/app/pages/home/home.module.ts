import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';
import { SectionModule } from 'src/app/section/section.module';


@NgModule({
    declarations: [HomeComponent, SlideComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,

        SectionModule
    ],
    entryComponents: [SlideComponent]
})
export class HomeModule { }

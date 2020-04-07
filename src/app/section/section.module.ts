import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner/partner.component';
import { NewsComponent } from './news/news.component';
import { MengapaComponent } from './mengapa/mengapa.component';
import { MapComponent } from './map/map.component';

const COM = [
    NewsComponent,
    PartnerComponent,
    MengapaComponent,
    MapComponent
]

@NgModule({
    declarations: [...COM],
    imports: [
        CommonModule
    ],
    exports: [...COM]
})
export class SectionModule { }

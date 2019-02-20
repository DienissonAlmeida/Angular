import { NgModule } from '@angular/core';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { MenuBarComponent } from './menubar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        MenuBarComponent
    ],
    imports: [
        DarkenOnHoverModule,
        CommonModule
    ]
})
export class MenuBarModule {

}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoaderComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoaderComponent
    ]
})
export class SharedModule { }

import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';

// todo - refactorizar, dejar este module de angular material comun y poner los componentes menos usados en los modulos de las páginas
@NgModule({
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatCardModule,
    MatTooltipModule,
    MatSelectModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule
  ],
})
export class MaterialComponentsModule {

}

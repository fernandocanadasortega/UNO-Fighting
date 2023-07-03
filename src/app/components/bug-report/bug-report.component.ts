import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialComponentsModule } from '../../material-components.module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MaterialComponentsModule],
})
export class BugReportComponent {

  public errorTopic: string = '';
  public errorMessage: string = '';

  constructor(
    public dialogRef: MatDialogRef<BugReportComponent>
  ) {}

  public sendReport() {
    console.log(`Enviado reporte. Descripción: ${this.errorTopic}. Detalles: ${this.errorMessage}`);
    this.dialogRef.close();
  }
}

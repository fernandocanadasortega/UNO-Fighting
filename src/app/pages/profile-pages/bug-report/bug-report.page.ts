import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UtilsService } from 'services/utils.service';
import { MaterialComponentsModule } from 'src/app/material-components.module';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.page.html',
  styleUrls: ['./bug-report.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MaterialComponentsModule]
})
export class BugReportPage {

  public description: string = '';
  public details: string = '';

  public showPassword: boolean = false;

  constructor(private utils: UtilsService) { }

  public send() {
    console.log(`Enviando datos del reporte. ¿Que ha pasado?: ${this.description}, Detalles del error: ${this.details}.`);
    this.utils.navigateReplacingUrl('/home/profile');
  }
}

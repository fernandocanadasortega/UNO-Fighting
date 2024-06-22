import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { MaterialComponentsModule } from '../../material-components.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'bug-report',
  templateUrl: './bug-report.page.html',
  styleUrls: ['./bug-report.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MaterialComponentsModule]
})
export class BugReport {

  public description: string = '';
  public details: string = '';

  public showPassword: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private toastController: ToastController
  ) { }

  public async sendBug() {
    console.log(`Enviando datos del reporte. ¿Que ha pasado?: ${this.description}, Detalles del error: ${this.details}.`);
    this.modalCtrl.dismiss();

    const toast = await this.toastController.create({
      message: 'Error registrado correctamente',
      duration: 2500,
      position: 'bottom'
    });

    await toast.present();
  }

  public closeModal() {
    this.modalCtrl.dismiss();
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialComponentsModule } from '../../material-components.module';
import { UtilsService } from '../../services/utils.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MaterialComponentsModule]
})
export class ProfilePage implements OnInit {

  public profileImageButtons: any[] = [
    {
      icon: 'camera',
      text: 'Abrir cámara',
      data: {
        action: 'photo-image',
      },
    },
    {
      icon: 'images',
      text: 'Seleccionar desde galería',
      data: {
        action: 'galery-image',
      },
    },
    {
      icon: 'trash',
      text: 'Eliminar imagen de perfil',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    }
  ];

  constructor(
    public dialog: MatDialog,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    console.log('Cargan mi perfil');
  }

  public navigateUserData() {
    this.utils.navigateReplacingUrl('/profile/user-data');
  }

  public navigateUserStats() {
    this.utils.navigateReplacingUrl('/profile/user-stats');
  }

  public sendBugReport() {
    this.utils.navigateReplacingUrl('/profile/bug-report');
  }

  public logout() {
    this.utils.navigateReplacingUrl('/login');
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialComponentsModule } from '../../../material-components.module';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'modify-profile',
  templateUrl: './modify-profile.page.html',
  styleUrls: ['./modify-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MaterialComponentsModule, HeaderComponent]
})
export class ModifyProfilePage {

  public username: string = '';
  public userStatus: string = '';

  constructor() { }
}

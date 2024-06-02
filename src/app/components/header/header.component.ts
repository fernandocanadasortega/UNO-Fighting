import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { UtilsService } from 'services/utils.service';
import { MaterialComponentsModule } from 'src/app/material-components.module';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule, MaterialComponentsModule, SideMenuComponent]
})
export class HeaderComponent  implements OnInit {

  constructor(public utils: UtilsService) { }

  ngOnInit() {}

}

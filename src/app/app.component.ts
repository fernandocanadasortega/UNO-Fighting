import { Component } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/languages.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private languageService: LanguageService,
    private translateService: TranslateService,
  ) {
    this.initializeApp();
    this.languageService.getLanguageObservable().subscribe(value => {
      this.translateService.use(value);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (localStorage.getItem('language') && localStorage.getItem('language') != "null") {
        this.translateService.setDefaultLang(localStorage.getItem('language')!);
      }
      else {
        localStorage.setItem('language', 'es');
        this.translateService.setDefaultLang('es');
      }
    });
  }
}

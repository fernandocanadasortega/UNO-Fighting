import { Injectable } from '@angular/core';
import { Themes } from '../interfaces/themes';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { genSaltSync, hashSync } from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public themes = Themes;
  public systemTheme: Themes = Themes.DARK;
  public serverBaseURL: string = 'http://localhost:3000';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Check system current theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.systemTheme = Themes.DARK;
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.systemTheme = Themes.LIGHT;
    }

    // Open a listener that watches system current theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.systemTheme = event.matches ? Themes.DARK : Themes.LIGHT;
    });
  }

  /**
   * Navega a una página de forma relativa, tiene en cuenta la posición de la página actual en el array de rutas, envía datos a esa página si es necesario
   * @param route string, ruta de la página a la cuál navegar
   * @param payload any - opcional, json con datos extra para mandar a la página
   */
  public navigateRelative(route: string, payload?: any) {
    let routeCommand: any[] = [route];
    if (payload) {
      routeCommand.push(payload); // Para que se envíe con exito debes mandar el payload como objeto (ej: un json) y no como un primitivo (ej: number, string). Obtener datos (route: ActivatedRoute): this.route.params.pipe(take(1)).subscribe((params: Params) => params;
    }
    this.router.navigate(routeCommand, { relativeTo: this.activatedRoute });
  }

  /**
   * Navega a una página sin guardar el estado de la página actual, envía datos a esa página si es necesario
   * @param route string, ruta de la página a la cuál navegar
   * @param payload any - opcional, json con datos extra para mandar a la página
   */
  public navigateReplacingUrl(route: string, payload?: any) {
    if (payload) this.router.navigate([route, payload], { replaceUrl: true }); // Para que se envíe con exito debes mandar el payload como objeto (ej: un json) y no como un primitivo (ej: number, string). Obtener datos (route: ActivatedRoute): this.route.params.pipe(take(1)).subscribe((params: Params) => params;
    else this.router.navigate([route], { replaceUrl: true });
  }

  /**
   * Navega a una página guardando el estado de la página actual, envía datos a esa página si es necesario
   * @param route string, ruta de la página a la cuál navegar
   * @param payload any - opcional, json con datos extra para mandar a la página
   */
  public navigateSavingUrlState(route: string, payload?: any) {
    if (payload) this.router.navigate([route, payload], { replaceUrl: false }); // Para que se envíe con exito debes mandar el payload como objeto (ej: un json) y no como un primitivo (ej: number, string). Obtener datos (route: ActivatedRoute): this.route.params.pipe(take(1)).subscribe((params: Params) => params;
    else this.router.navigate([route], { replaceUrl: false });
  }

  public createHash(textToEncrypt: string): string {
    const salt = genSaltSync(10);
    return hashSync(textToEncrypt, salt);
  }
}

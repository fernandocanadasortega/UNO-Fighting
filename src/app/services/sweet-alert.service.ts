import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  //? Tiempo máximo en milisegundos de la petición antes de que salte un error de Timeout
  public requestTimeout: number = 18000;

  constructor(private languageService: TranslateService) { }

  /**
   * Muestra un popup de Sweet Alert
   * @param options Opciones seleccionadas del Sweet Alert
   * @returns Promesa con los resultados del popup
   */
  showSwal(options: SweetAlertOptions): Promise<SweetAlertResult<any>> {
    // Establecer valores por defecto
    options.backdrop = true;

    if (!options.hasOwnProperty('allowOutsideClick')) options.allowOutsideClick = false;
    if (!options.hasOwnProperty('allowEscapeKey')) options.allowEscapeKey = false;

    if (!options.hasOwnProperty('confirmButtonColor')) options.confirmButtonColor = '#3085d6';
    if (!options.hasOwnProperty('cancelButtonColor')) options.cancelButtonColor = '#d33';
    if (!options.hasOwnProperty('denyButtonColor')) options.denyButtonColor = '#673ab7';

    if (!options.hasOwnProperty('confirmButtonText')) options.confirmButtonText = 'accept';
    if (!options.hasOwnProperty('cancelButtonText')) options.cancelButtonText = 'cancel';

    // Establecer propiedades css
    if (options.icon == 'error') options.customClass = { popup: 'swal-error-body', footer: 'swal-error-footer' };
    else options.customClass = { popup: 'swal-body' };

    // Traducción textos
    if (options.title) options.title = this.languageService.instant(options.title!.toString());
    if (options.text) options.text = this.languageService.instant(options.text!.toString());

    if (options.confirmButtonText) options.confirmButtonText = this.languageService.instant(options.confirmButtonText!.toString());
    if (options.cancelButtonText) options.cancelButtonText = this.languageService.instant(options.cancelButtonText!.toString());
    if (options.denyButtonText) options.denyButtonText = this.languageService.instant(options.denyButtonText!.toString());

    // Establecer cabecera por defecto
    if (!options.hasOwnProperty('title')) {
      if (options['icon'] == 'success') options.title = this.languageService.instant('success');
      else if (options['icon'] == 'question') options.title = this.languageService.instant('confirmation');
      else if (options['icon'] == 'info') options.title = this.languageService.instant('information');
      else if (options['icon'] == 'warning') options.title = this.languageService.instant('warning');
      else if (options['icon'] == 'error') options.title = this.languageService.instant('error');
    }

    return Swal.fire(options);
  }

  /**
   * Muestra un toast en una parte de la pantalla
   * @param options Opciones seleccionadas del Sweet Alert
   * @returns Promesa con los resultados del toast
   */
  toastSwal(options: SweetAlertOptions): Promise<SweetAlertResult<any>> {
    options.toast = true;
    options.didOpen = (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }

    // Establecer valores por defecto
    if (!options.hasOwnProperty('position')) options.position = 'top-right';
    if (!options.hasOwnProperty('timer')) options.timer = 4000;
    if (!options.hasOwnProperty('timerProgressBar')) options.timerProgressBar = true;
    if (!options.hasOwnProperty('showConfirmButton')) options.showConfirmButton = false;

    // Traducción textos
    if (options.title) options.title = this.languageService.instant(options.title!.toString());

    return Swal.fire(options);
  }

  /**
   * Muestra un popup de carga de Sweet Alert
   * @param options Opciones seleccionadas del Sweet Alert
   * @returns Promesa con los resultados del popup
   */
  loadingSwal(options: SweetAlertOptions): Promise<SweetAlertResult<any>> {
    options.didOpen = () => Swal.showLoading();

    // Establecer valores por defecto
    if (!options.hasOwnProperty('allowOutsideClick')) options.allowOutsideClick = false;
    if (!options.hasOwnProperty('allowEscapeKey')) options.allowEscapeKey = false;

    if (!options.hasOwnProperty('timerProgressBar')) options.timerProgressBar = true;
    if (!options.hasOwnProperty('timer')) options.timer = this.requestTimeout;

    // Traducción textos
    if (options.title) options.title = this.languageService.instant(options.title!.toString());
    if (options.text) options.text = this.languageService.instant(options.text!.toString());

    return Swal.fire(options);
  }

  /**
   * Resetea el tiempo restante para que se cierre el popup de carga
   */
  resetLoadingSwal() {
    Swal.increaseTimer(this.requestTimeout - <number>Swal.getTimerLeft())
  }

  /**
   * Cierra el popup de Sweet alert activo
   */
  dismissSwal() {
    Swal.close();
  }
}

/**
 * Servicio que maneja el idioma en el que está la aplicación
 */

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private selectedLanguage = new Subject<string>(); // Idioma seleccionado

  // Idiomas disponibles actualmente y que pueden ser seleccionados
  public languages = [
    {
      code: 'en',
      name: 'english'
    },
    {
      code: 'es',
      name: 'spanish'
    }
  ];

  constructor() { }

  /**
   * Devuelve el observable con la lista de idiomas que se activa cuando se cambia de idioma
   * @returns Observable<string>, observable que se activa cuando se cambia de idioma
   */
  public getLanguageObservable(): Observable<string> {
    return this.selectedLanguage.asObservable();
  }

  /**
   * Establece un nuevo idioma
   * @param data any, idioma seleccionado
   */
  public setLanguageData(data: any) {
    this.selectedLanguage.next(data);
  }

  /**
   * Cambia el idioma actual
   */
  languageChange() {
    let language: string | null = localStorage.getItem('language');

    if (language != null) {
      localStorage.setItem('language', language);
      this.setLanguageData(language);
    }
  }
}

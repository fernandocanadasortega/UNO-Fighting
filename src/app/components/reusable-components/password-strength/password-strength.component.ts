import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialComponentsModule } from '../../../material-components.module';
import { ExpansionOverlay } from '../expansion-overlay/expansion-overlay.component';
// import 'expansion-overlay/expansion-overlay.js';

export class PasswordStrengthTypes {
  static readonly EMPTY = { requieredScore: 0, value: 'empty', icon: 'remove_moderator' };
  static readonly VERY_WEAK = { requieredScore: 1, value: 'very_weak', icon: 'gpp_bad' };
  static readonly WEAK = { requieredScore: 2, value: 'weak', icon: 'gpp_bad' };
  static readonly NORMAL = { requieredScore: 3, value: 'normal', icon: 'gpp_maybe' };
  static readonly STRONG = { requieredScore: 5, value: 'strong', icon: 'verified_user' };
  static readonly VERY_STRONG = { requieredScore: 10, value: 'very_strong', icon: 'verified_user' };
}

export enum PasswordRequierements {
  PASSWORD_LENGTH,
  MINUS,
  MAYUS,
  SYMBOLS,
  NUMBERS
}

export interface PasswordStrengthRequirement {
  testId: number,
  testSuccess: boolean,
  testName: string
}

@Component({
  selector: 'password-strength-requirements',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, RouterModule, MaterialComponentsModule, ExpansionOverlay],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PasswordStrengthComponent {

  @Input() set updatePasswordScore(password: string) {
    this.verifyPasswordStrength(password);
  };

  // Parametros de la contraseña (Fortaleza e icono)
  public passwordStrength = {
    icon: PasswordStrengthTypes.EMPTY.icon,
    value: PasswordStrengthTypes.EMPTY.value
  }

  /**
   * Caracteres recomendados en la contraseña
   */
  public requirements: Array<PasswordStrengthRequirement> = [
    { testId: PasswordRequierements.PASSWORD_LENGTH, testName: 'password_composition_length', testSuccess: false },
    { testId: PasswordRequierements.MINUS, testName: 'password_composition_lowercase', testSuccess: false },
    { testId: PasswordRequierements.MAYUS, testName: 'password_composition_uppercase', testSuccess: false },
    { testId: PasswordRequierements.SYMBOLS, testName: 'password_composition_symbols', testSuccess: false },
    { testId: PasswordRequierements.NUMBERS, testName: 'password_composition_numbers', testSuccess: false }
  ];

  public strengthOverlayVisible: boolean = false;

  constructor() {  }

  getHtmlElements(): { strengthCard: HTMLElement, passwordComposition: HTMLElement, backdrop: HTMLElement } | null {
    const strengthCard = document.getElementById('strength-container-card');
    if (strengthCard == null) {
      return null;
    }

    const passwordComposition = document.getElementById('password-composition');
    if (passwordComposition == null) {
      return null;
    }

    const backdrop = document.getElementById('backdrop');
    if (backdrop == null) {
      return null;
    }

    return { strengthCard, passwordComposition, backdrop }
  }

  showPasswordStrength() {
    if (this.getHtmlElements() == null) {
      console.warn('No se puede mostrar el overlay de contraseña');
      return;
    }

    const { strengthCard, passwordComposition, backdrop } = this.getHtmlElements()!;
    const strengthCardRect = strengthCard.getBoundingClientRect();
    console.log(strengthCardRect);
    const passwordCompositionRect = passwordComposition.getBoundingClientRect();
    console.log(passwordCompositionRect);
    const yPosition = strengthCardRect.top - passwordCompositionRect.height + 4; // Añado 4px de margen para que no se quede demasiado separado el overlay
    passwordComposition.style.height = '0vh';
    passwordComposition.style.top = `${yPosition}px`;
    passwordComposition.style.visibility = 'visible';
    passwordComposition.style.height = 'fit-content';

    backdrop.style.visibility = 'visible';
    backdrop.style.opacity = '0.52';
    this.strengthOverlayVisible = true;
  }

  hidePasswordStrength() {
    if (this.getHtmlElements() == null) {
      console.warn('No se puede mostrar el overlay de contraseña');
      return;
    }

    const { strengthCard, passwordComposition, backdrop } = this.getHtmlElements()!;
    passwordComposition.style.visibility = 'hidden';
    backdrop.style.opacity = '0';
    setTimeout(() => { backdrop.style.visibility = 'hidden' }, 250); // Espera los 0.3s de transición antes de ocultar el overlay
    this.strengthOverlayVisible = false;
  }

  /**
   * Valora la fortaleza de la contraseña
   * @param password Contraseña a evaluar
   * @returns Usado para salir del método si no se cumplen las condiones necesarias
  */
  public verifyPasswordStrength(password: string) {
    let strengthScore: number = 0;

    // Reinicio de los valores
    this.passwordStrength = {
      icon: PasswordStrengthTypes.EMPTY.icon,
      value: PasswordStrengthTypes.EMPTY.value
    }

    for (const requirement of this.requirements) {
      requirement.testSuccess = false;
    }


    // Compruebo valores contraseña (Calcula la fortaleza de la contraseña)
    if (password.length == 0) { // No hay nada escrito
      return;
    }

    if (password.match(/[a-z]+/)) { // Incluye letras minusculas
      strengthScore += 1;
      this.requirements.find((requirement: PasswordStrengthRequirement) => requirement.testId == PasswordRequierements.MINUS)!.testSuccess = true;
    }

    if (password.match(/[A-Z]+/)) { // Incluye letras mayúsculas
      strengthScore += 1;
      this.requirements.find((requirement: PasswordStrengthRequirement) => requirement.testId == PasswordRequierements.MAYUS)!.testSuccess = true;
    }

    if (password.match(/[$@#&%!?*^=-_.,]+/)) { // Incluye símbolos
      strengthScore += 1;
      this.requirements.find((requirement: PasswordStrengthRequirement) => requirement.testId == PasswordRequierements.SYMBOLS)!.testSuccess = true;
    }

    if (password.match(/[0-9]+/)) { // Incluye números
      strengthScore += 1;
      this.requirements.find((requirement: PasswordStrengthRequirement) => requirement.testId == PasswordRequierements.NUMBERS)!.testSuccess = true;
    }

    if (password.length < 6) { // Incluye menos de 6 caracteres
      strengthScore -= 2;
    }
    else if (password.length >= 6 && password.length < 12) { // Incluye menos de 12 caracteres
      strengthScore -= 1;
    }
    else if (password.length >= 12 && password.length < 24) { // Incluye 12 caracteres o más
      strengthScore += 2;
      this.requirements.find((requirement: PasswordStrengthRequirement) => requirement.testId == PasswordRequierements.PASSWORD_LENGTH)!.testSuccess = true;
    }
    else if (password.length >= 24) { // Incluye 24 caracteres o más
      strengthScore = 10; // Puntuación máxima
      this.requirements.find((requirement: PasswordStrengthRequirement) => requirement.testId == PasswordRequierements.PASSWORD_LENGTH)!.testSuccess = true;
    }


    // Establezco los parámetros de la contraseña (Fortaleza e icono)
    if (strengthScore >= PasswordStrengthTypes.WEAK.requieredScore && strengthScore < PasswordStrengthTypes.NORMAL.requieredScore) { // Contraseña débil
      this.passwordStrength = {
        icon: PasswordStrengthTypes.WEAK.icon,
        value: PasswordStrengthTypes.WEAK.value
      }
      return;
    }

    if (strengthScore >= PasswordStrengthTypes.NORMAL.requieredScore && strengthScore < PasswordStrengthTypes.STRONG.requieredScore) { // Contraseña normal
      this.passwordStrength = {
        icon: PasswordStrengthTypes.NORMAL.icon,
        value: PasswordStrengthTypes.NORMAL.value
      }
      return;
    }

    if (strengthScore >= PasswordStrengthTypes.STRONG.requieredScore && strengthScore < PasswordStrengthTypes.VERY_STRONG.requieredScore) { // Contraseña fuerte
      this.passwordStrength = {
        icon: PasswordStrengthTypes.STRONG.icon,
        value: PasswordStrengthTypes.STRONG.value
      }
      return;
    }

    if (strengthScore >= PasswordStrengthTypes.VERY_STRONG.requieredScore) { // Contraseña muy fuerte
      this.passwordStrength = {
        icon: PasswordStrengthTypes.VERY_STRONG.icon,
        value: PasswordStrengthTypes.VERY_STRONG.value
      }
      return;
    }

    this.passwordStrength = { // Contraseña muy débil
      icon: PasswordStrengthTypes.VERY_WEAK.icon,
      value: PasswordStrengthTypes.VERY_WEAK.value
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialComponentsModule } from '../../../material-components.module';
import { UtilsService } from '../../../services/utils.service';
import { PasswordStrengthComponent } from '../../../components/reusable-components/password-strength/password-strength.component';

@Component({
  selector: 'register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, RouterModule, MaterialComponentsModule, HttpClientModule, PasswordStrengthComponent]
})
export class RegisterPage implements OnInit {

  public form: FormGroup;
  private formError: boolean = false;
  public showPassword: boolean = false;
  public panelOpenState = false;

  constructor(
    private formBuilder: FormBuilder,
    public utils: UtilsService,
    private httpClient: HttpClient
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeat_password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public toggleShowPassword() {
    this.showPassword = this.showPassword ? false : true;
  }

  registerUser() {
    let userInformation: any = this.form.getRawValue();
    userInformation['password'] = this.utils.createHash(userInformation['password']);
    console.log('HASH');
    console.log(userInformation['password']);
    delete userInformation['repeat_password'];

    this.httpClient.post(`${this.utils.serverBaseURL}/auth/register`, userInformation).subscribe(res => {
      console.log(res);
    });
  }
}

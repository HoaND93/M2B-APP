import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth.provider';
import { LoginRequest } from '../../model/request/login-request';
import { LoginResponse } from '../../model/response/login-response';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthProvider]
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private authProvider: AuthProvider
  ) {
  }
  // email to login
  public email: string;

  // password to login
  public password: string;

  ionViewDidLoad() {
  }

  /**
   * Execute login
   */
  onLogin(){
    let loginRequest: LoginRequest;
    loginRequest = {
      email: this.email,
      password: this.password,
      platform: "web_admin"
    }
    this.authProvider.login(loginRequest).subscribe(
      (response: LoginResponse) => {
        // Set authorization to local storage
        localStorage.setItem('authorization', `${response.token_type} ${response.access_token}`);
        this.navCtrl.setRoot(HomePage);
      },
      errorResponse => {
        if (errorResponse.status === 422) {
          let message: string[] = [];
          for(var property in errorResponse.error.errors) {
            var value = errorResponse.error.errors[property];
            message.push(value);
          }
          this.showMessage(message);
        } else {
          let message: string[] = [];
          message.push(errorResponse.error.errors.detail);
          this.showMessage(message);
        }
      }
    );
  }

  /**
   * Display message
   * @param message 
   */
  showMessage(listMessages: string[]) {
    let message: string;
    // Convert list message to message to display
    listMessages.forEach(element => {
      if (message) {
        message = `${message}
                 ${element}`;
      } else {
        message = `${element}`;
      }
    });
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present(toast);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login() {
    this.authProvider.login();
  }

  logout() {
    this.authProvider.logout();
  }

}

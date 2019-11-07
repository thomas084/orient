import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



import { Platform } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  title ="ORIENTING";
  username: string;
  password: any;
  userData: any;
  error: string = '';
  pop : boolean = false;
  email : string;


  constructor(private facebook: Facebook,
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController
    ) { }
  
              
google(){
  alert("Hello! I am an alert box!!");
}

  loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    });
  }
link(){
  window.open("https://www.w3schools.com/php/", "_self");
}
  login() {
    this.fireauth.auth.signInWithEmailAndPassword(this.username, this.password)
      .then(res => {
        if (res.user) {
          console.log(res.user);
          this.router.navigate(['/profiledata']);
        }
      })
      .catch(err => {
        console.log(`login failed ${err}`);
        this.error = err.message;
        alert(' user name or password is invalid please try again ');
      });
      this.username= "";
      this.password="";
  }

  popup(){
    this.pop = true;
  }
  popupcl()
  {
    this.pop = false;
  }

  recover() {
    console.log(this.email)
    this.fireauth.auth.sendPasswordResetEmail(this.email)
      .then(data => {
        console.log(data);
        this.presentToast('Password reset email sent', false, 'bottom', 1000);
        this.router.navigateByUrl('/login');
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: show_button,
      position: position,
      duration: duration
    });
    toast.present();
  }


  ngOnInit() {
  }

}

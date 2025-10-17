import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {

  email = '';
  senha = '';

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  async cadastrar(){
    const loading= await this.loadingCtrl.create({ message: 'Cadastrando...'});
    await loading.present();

    try {
      await this.AuthService.register(this.email, this.senha);
      await loading.dismiss();
      this.presentToast('Cadastrado com sucesso!');
      this.router.navigateByUrl('/login');
    } catch (error: any) {
      await loading.dismiss();
      this.presentToast('Erro ao cadastrar' + error.message, 'danger');
    }
  }

  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }

}

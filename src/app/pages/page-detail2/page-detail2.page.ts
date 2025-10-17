import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Item2 } from '../../services/data';
import { LoadingController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail2.page.html',
  styleUrls: ['./page-detail2.page.scss'],
  standalone: false,
})
export class PageDetail2Page implements OnInit {

  item2: Item2 = {
    name:'',
    experiencia: '',
    especial: '',
    telefone: 0,
  };

  itemId: string | null = null;

  isNewItem = true;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router,
              private LoadingController: LoadingController, private toastController: ToastController) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');

    if (this.itemId) {

      this.isNewItem = false;

      this.loadItem();

    }
  }
  async loadItem() {
    const loading = await this.LoadingController.create({
      message: 'Carregando item...'
    });
    await loading.present();
    this.dataService.getItem2(this.itemId!).subscribe(res => {
      loading.dismiss();
     if (res) {
      this.item2 = res;
     } else {
      this.presentToast('Item não encontrado', 'danger');
      this.router.navigateByUrl('/home');
     }
    }, err => {
      loading.dismiss();
      this.presentToast('Erro ao carregar item', 'danger');
      this.router.navigateByUrl('/home');
    });
  }

  async saveItem() {
    const loading = await this.LoadingController.create({
      message: 'Salvando item...'
    });
    await loading.present();

    if (this.isNewItem) {
      this.dataService.addItem2(this.item2).then(() => {
        loading.dismiss();
        this.presentToast('Item adicionado com sucesso', 'success');
        this.router.navigateByUrl('/home');
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao adicionar item', 'danger');
      });
}   else {
      this.dataService.updateItem2(this.item2).then(() => {
        loading.dismiss();
        this.presentToast('Item atualizado com sucesso', 'success');
        this.router.navigateByUrl('/home');
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao atualizar item', 'danger');
      });
}
}
  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }
}

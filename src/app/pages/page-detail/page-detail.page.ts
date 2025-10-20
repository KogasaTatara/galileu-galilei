import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Item } from '../../services/data';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.page.html',
  styleUrls: ['./page-detail.page.scss'],
  standalone: false,
})
export class PageDetailPage implements OnInit {
  item: Item = {
    name: '',
    especie: '',
    raca: '',
    idade: 0,
    obsadd: '',
  };

  itemId: string | null = null;
  isNewItem = true;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    if (this.itemId) {
      this.isNewItem = false;
      this.loadItem();
    }
  }

  async loadItem() {
    const loading = await this.loadingController.create({
      message: 'Carregando item...',
    });
    await loading.present();

    this.dataService.getItem(this.itemId!).subscribe(
      (res) => {
        loading.dismiss();
        if (res) {
          this.item = res;
        } else {
          this.presentToast('Item não encontrado', 'danger');
          this.router.navigateByUrl('/home');
        }
      },
      (err) => {
        loading.dismiss();
        this.presentToast('Erro ao carregar item', 'danger');
        this.router.navigateByUrl('/home');
      }
    );
  }

  async saveItem() {
    const loading = await this.loadingController.create({
      message: 'Salvando item...',
    });
    await loading.present();

    try {
      if (this.isNewItem) {
        await this.dataService.addItem(this.item);
        this.presentToast('Item adicionado com sucesso', 'success');
      } else {
        await this.dataService.updateItem(this.item);
        this.presentToast('Item atualizado com sucesso', 'success');
      }
      this.router.navigateByUrl('/home');
    } catch (err) {
      this.presentToast('Erro ao salvar item', 'danger');
    } finally {
      loading.dismiss();
    }
  }

  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
    });
    toast.present();
  }
}

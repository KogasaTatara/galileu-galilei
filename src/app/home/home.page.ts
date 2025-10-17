import { Component } from '@angular/core';

import { DataService, Item, Item2  } from '../services/data';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  items: Item[] = [];
  items2: Item2[] = [];
  constructor(
    private dataService: DataService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit(){
    this.dataService.getItems ().subscribe(res => {this.items = res;});
    this.dataService.getItems2().subscribe(res => {this.items2 = res;});
  }
  addItem1(){
    this.router.navigateByUrl('/page-detail');
  }
  editItem1(item: Item){
    this.router.navigateByUrl(`/page-detail/${item.id}`);
  }
  async deleteItem1(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão',
      message: 'Tem certesa que deseja excluir esse item?',
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Excluir',
          handler: () => {
            this.dataService.deleteItem(id);
          },
        },
      ],
    });
    await alert.present();
  }
  addItem2(){
    this.router.navigateByUrl('/page-detail2');
  }
  editItem2(item2: Item2){
    this.router.navigateByUrl(`/page-detail2/${item2.id}`);
  }
    async deleteItem2(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão',
      message: 'Tem certesa que deseja excluir esse item?',
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Excluir',
          handler: () => {
            this.dataService.deleteItem2(id);
          },
        },
      ],
    });
    await alert.present();
  }
};
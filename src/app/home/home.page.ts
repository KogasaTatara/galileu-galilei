import { Component } from '@angular/core';

<<<<<<< HEAD
<<<<<<< HEAD
import { DataService, Item, Item2  } from '../services/data';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
=======
>>>>>>> 2dee289 (Initial commit)
=======
import { DataService, Item } from '../services/data';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
>>>>>>> b3d5e06 (engraçado né? como as coisas funcionam...)
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

<<<<<<< HEAD
<<<<<<< HEAD
  items: Item[] = [];
  items2: Item2[] = [];
=======
  items: Item[] = [];
>>>>>>> b3d5e06 (engraçado né? como as coisas funcionam...)
  constructor(
    private dataService: DataService,
    private router: Router,
    private alertController: AlertController
  ) {}
<<<<<<< HEAD

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
=======
  constructor() {}
=======
>>>>>>> b3d5e06 (engraçado né? como as coisas funcionam...)

  ngOnInit(){
    this.dataService.getItems ().subscribe(res => {this.items = res;});
  }
  addItem(){
    this.router.navigateByUrl('/page-detail');
  }
  editItem(item: Item){
    this.router.navigateByUrl(`/page-detail/${item.id}`);
  }
  async deleteItem(id: string) {
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
}
>>>>>>> 2dee289 (Initial commit)

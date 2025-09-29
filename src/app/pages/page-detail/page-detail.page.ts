import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Item } from '../../services/data.service';
import { LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.page.html',
  styleUrls: ['./page-detail.page.scss'],
  standalone: false,
})
export class PageDetailPage implements OnInit {

  item: Item = {
    name:'',
    description:''
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

}

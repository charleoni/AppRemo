import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-navegar',
  templateUrl: './navegar.page.html',
  styleUrls: ['./navegar.page.scss'],
})
export class NavegarPage {

  constructor(public modalController: ModalController) {

  }

    async presentModal(dime){
      const modal = await this.modalController.create({
        component: ModalPagePage,
        componentProps: {value: dime}
      });
      await modal.present();
    }
}

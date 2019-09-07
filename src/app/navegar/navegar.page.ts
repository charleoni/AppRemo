import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegar',
  templateUrl: './navegar.page.html',
  styleUrls: ['./navegar.page.scss'],
})
export class NavegarPage {

  constructor(public modalController: ModalContoller) { 

  }

    async presentarModal(){
      const modal=await this.modalController.create({
        component: ModalPage
      });
      await modal.present();
    }
  

}

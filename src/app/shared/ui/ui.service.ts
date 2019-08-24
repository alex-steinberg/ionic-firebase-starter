import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  toastDefaults = {
    message: 'empty message',
    duration: 5000,
    position: 'top',
  };
  constructor(
      private toastCtrl: ToastController,
  ) { }

  async showToast(options: {message: string, duration?: number}) {
    const optionsWithDefaults = Object.assign(this.toastDefaults, options);
    const toast = await this.toastCtrl.create(optionsWithDefaults);
    await toast.present();
  }
}

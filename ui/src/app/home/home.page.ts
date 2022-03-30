import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

list = [
    {
      title: 'Schedule test',
      description: 'Must clean my room. After cleaning, do a quick walk outside and then take a nap.'+
        'Lastly, do my activities so that I can play afterwards hehe.',
      date: '04/01/2022'
    },

    {
      title: 'Foxy Jumpy',
      description: 'The quick brown fox jumps over the lazy dog.',
      date: '06/15/2022'
    },

    {
      title: 'Foobar',
      description: 'I am a test description. Yes indeed I am.',
      date: '12/25/2022'
    }
    
  ];

  constructor(private alertController: AlertController) {}

  async handleButtonClick() {
    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Do you agree to delete this schedule?',
      buttons: ['Cancel', 'Delete'],
    });

    await alert.present();
  }
}

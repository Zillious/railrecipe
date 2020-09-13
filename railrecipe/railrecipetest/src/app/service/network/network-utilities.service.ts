import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Platform, AlertController } from '@ionic/angular';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class NetworkUtilitiesService {
  isNetworkAvailable: boolean = false;
  aNetworkFMsg = 'Network not available.';
  aTitle = 'RailRecipe';
  aNetworkAMsg = 'Network is available.';
  constructor(private network: Network,
    private platform: Platform,
    private alert: AlertController
  ) {
     this.checkForNetwork();
  }

  checkForNetwork() {
    this.network.onDisconnect().subscribe(async () => {
      const alt = await this.alert.create({
        header: this.aTitle,
        message: this.aNetworkFMsg,
        buttons: ["OK"]
      });
      await alt.present();
      this.isNetworkAvailable = false;
    })

    this.network.onConnect().subscribe(async () => {
      const alt = await this.alert.create({
        header: this.aTitle,
        message: this.aNetworkAMsg,
        buttons: ["OK"]
      });

      this.isNetworkAvailable = true;
    })

  }
}

import { Component } from '@angular/core';
/*import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  Environment
} from '@ionic-native/google-maps';*/
/*import { LoadingController } from '../../../node_modules/@ionic/angular';*/

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 /* public lat = -22.494725;
  public long = -48.561356;*/

  constructor(/*private geolocation: Geolocation,
    private loadingCtrl: LoadingController  */
  ) {}

  /*
  public async buscaBar() {
    await this.presentLoading();

      this.montarMapa();
      this.loading.dismiss();

    });
  }

  public montarMapa() {
    this.geolocation.getCurrentPosition().then((resp) => {

      const position = new google.maps.LatLng(this.lat, this.long);

      const mapOptions = {
        zoom: 15,
        center: position
      }

      this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

      var infowd = new google.maps.InfoWindow({
        maxWidth: 500
      });

      var marker, i;

      for (i = 0; i < this.bares.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(this.bares[i].lat, this.bares[i].long),
          map: this.map,
          animation: google.maps.Animation.DROP
        });

        google.maps.event.addListener(marker, 'click', mostraMarcador(marker, i, this.bares, infowd, this.router));
      }

      //Fechar os pop-up
      google.maps.event.addListener(this.map, 'click', function () {
        infowd.close();
      });

      this.loading.dismiss();

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    function mostraMarcador(marker, i, bares, infowd, router) {
      infowd.close();
      return function () {
        infowd.open(this.map, marker);
        infowd.setContent('<div color="fundo">' +
          '<h4 class="tituloPopUp">' + bares[i].nomeBar + '</h4>' +
          '<div>' +
          '<ion-item>' +
          '<ion-icon name="pin" slot="start"></ion-icon>' +
          '<ion-label>' +
          'Nº.' + bares[i].numero + ' - ' + bares[i].bairro +
          '</ion-label>' +
          '</ion-item>' +

          '<ion-item>' +
          '<ion-icon name="call" slot="start"></ion-icon>' +
          '<ion-label>' + bares[i].telefone + '</ion-label>' +
          '</ion-item>' +

          '<ion-item>' +
          '<ion-icon name="time" slot="start"></ion-icon>' +
          '<ion-label>' + bares[i].horario + '</ion-label>' +
          '</ion-item>' +

          '<ion-button id="btn' + i + '" color="laranja" expand="block" fill="outline">Abrir</ion-button>' +
          '</div>' +
          '</div>');

        new google.maps.event.addListener(infowd, 'domready', () => {
          let clickableItem = document.getElementById('btn' + i);
          if (clickableItem) {
            clickableItem.addEventListener('click', () => {
              console.log('btn' + i);
              router.navigate(['/tela-bar', bares[i].id])
            })
          }
        });
      }
    }
  }


  ngOnInit() { }


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();
  }

  ngAfterContentInit() { }

  ionViewWillEnter() { this.menuCtrl.enable(true); }

  */
}

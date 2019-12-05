import { Component } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { Imovel } from '../interfaces/imovel';
import { ImovelService } from '../servicos/imovel.service';
import { Subscription } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public teste;
  private loading: any;

  public imovel: Imovel = {};
  public imovelId: string = null;
  private imovelSubs: Subscription;

  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private imoService: ImovelService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute
  ) { 
    this.imovelId = this.activatedRoute.snapshot.params['id'];
    if (this.imovelId) this.loadImovel();
  }

  loadImovel() {
    this.imovelSubs = this.imoService.getImovel(this.imovelId).subscribe(data => {
      this.imovel = data;
    });
  }

  async salvarImovel() {
    await this.presentLoading();

    if (this.imovelId) {
      try {
        await this.imoService.updateImovel(this.imovelId, this.imovel);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tabs/tab2');
      } catch (error) {
        console.log(error)
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } else {
      this.imovel.createdAt = new Date().getTime();

      try {
        await this.imoService.addImovel(this.imovel);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tabs/tab2');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }

  ngOnDestroy() {
    if (this.imovelSubs) this.imovelSubs.unsubscribe();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}

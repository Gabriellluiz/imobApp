import { Component } from '@angular/core';
import { ImovelService } from '../servicos/imovel.service';
import { Imovel } from '../interfaces/imovel';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  public listaImov = [];
  public imoveis = new Array<Imovel>();
  private imovSubs: Subscription;

  constructor(private imovService: ImovelService
  ) {
    

    this.imovSubs = this.imovService.getImoveis().subscribe(data => {
      this.imoveis = data;
    })
  }

  ionViewWillEnter(){
    this.inicializador();
  }

  public inicializador(){
    this.listaImov = this.imoveis;
    console.log(this.listaImov);
  }

  public buscaImov(evento){
    //this.inicializador();
    
    let busca:string = evento.target.value;    //evento.target.value é um codigo que o evento entra no input e ve se tem algun valor(texto) la
    //trim tira espacos atoa na string; '' é um texto que não tem nd mas que existe; o if ta ali para verificar se o busca ta vazio ou não
    if (busca && busca.trim() !=''){  //filter é uma funçao do array que filtra todos que estiverem na var anterior
      this.imoveis = this.imoveis.filter(item =>{  //toLowerCase coloca tudo em minusculo; includes procura se dentro do nome ta incluso oque foi digitado na seachbar
        return(item.desc.toLowerCase().includes(busca.toLowerCase()));
      });
    }
  }


  async deleteProdut(id: string) {
    try {
      await this.imovService.deleteImovel(id);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    this.imovSubs.unsubscribe();
  }
}

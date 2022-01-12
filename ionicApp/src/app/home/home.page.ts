import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
 // constructor() {}

  constructor(private navegacao: NavController) { }

  ngOnInit() {
  }

 abrirBotoes(){
    this.navegacao.navigateForward('botoes')
 } //Ja e um metodo public

 abrirLista(){
  this.navegacao.navigateForward('lista')
    
} //Ja e um metodo public

abrirArredondado(){
  this.navegacao.navigateForward('arredondado')
    
} //Ja e um metodo public

abrirCartao(){
  this.navegacao.navigateForward('cartoes')
    
} //Ja e um metodo public

abrirCor(){
  this.navegacao.navigateForward('cores')
    
} //Ja e um metodo public

abrirData(){
  this.navegacao.navigateForward('data-binding')
    
} //Ja e um metodo public

abrirDados(){
  this.navegacao.navigateForward('entrada-dados')
    
} //Ja e um metodo public

abrirExpandir(){
  this.navegacao.navigateForward('expandido')
    
} //Ja e um metodo public

abrirIcone(){
  this.navegacao.navigateForward('icones')
    
} //Ja e um metodo public

abrirModelo(){
  this.navegacao.navigateForward('modelos')
    
} //Ja e um metodo public

abrirPreencher(){
  this.navegacao.navigateForward('preenchimento')
    
} //Ja e um metodo public
abrirGrid(){
  this.navegacao.navigateForward('sistema-grid')
    
} //Ja e um metodo public

abrirTamanho(){
  this.navegacao.navigateForward('tamanhos')
    
} //Ja e um metodo public



  


}

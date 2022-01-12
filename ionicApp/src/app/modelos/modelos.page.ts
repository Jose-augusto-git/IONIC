import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.page.html',
  styleUrls: ['./modelos.page.scss'],
})
export class ModelosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public pesquisa: String = ""

  public resultado: String = ""

  recuperar(){
  this.resultado = this.pesquisa
    
} //Ja e um metodo public
}

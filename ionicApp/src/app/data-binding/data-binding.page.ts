import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.page.html',
  styleUrls: ['./data-binding.page.scss'],
})
export class DataBindingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public titulo: String = "Meu primeiro App"

  public imagemRandomica: String = "https://source.unsplash.com/random"

  public imagemLocal: String = "../../assets/icone-celular.png"

  public atualiza(): void{
    this.titulo = "Texto Alterado"
  }

  public acao(): void{
    this.titulo = "Botão clicado"
  }

}

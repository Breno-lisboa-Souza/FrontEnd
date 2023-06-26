import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardmaior-produto',
  templateUrl: './cardmaior-produto.component.html',
  styleUrls: ['./cardmaior-produto.component.css']
})
export class CardmaiorProdutoComponent {
  @Input() foto: string = '';
  @Input() nomeProduto: string = '';
  @Input() promocao: boolean = true;
  @Input() idProduto: number = 0;
  @Input() dataValidade: string = '';
  @Input() precoProduto: number = 0;

  constructor() {}

  ngOnInit(): void {}
}

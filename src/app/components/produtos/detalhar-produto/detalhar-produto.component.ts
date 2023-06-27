import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhar-produto',
  templateUrl: './detalhar-produto.component.html',
  styleUrls: ['./detalhar-produto.component.css']
})
export class DetalharProdutoComponent {

  @Input() foto: string = '';
  @Input() nomeProduto: string = '';
  @Input() promocao: boolean = true;
  @Input() idProduto: number = 0;
  @Input() dataValidade: string = '';
  @Input() precoProduto: number = 0;


    constructor() {}

    ngOnInit(): void {}


}

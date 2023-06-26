import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';
import { CardmaiorProdutoComponent } from './components/cardmaior-produto/cardmaior-produto.component';

@NgModule({
  declarations: [CardProdutoComponent, CardmaiorProdutoComponent],
  imports: [CommonModule],
  exports: [CardProdutoComponent],
})
export class SharedModule {}

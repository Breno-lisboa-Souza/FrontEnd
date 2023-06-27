import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nomeProduto: string = 'Curso Angular';
  idProduto: number = 1;
  precoProduto: number = 122.5;
  promocao: boolean = false;
  foto: string = 'assets/img/Angular.png';
  dataValidade = '2023-07-28';

  nomeProduto2: string = 'Curso JavaScript';
  idProduto2: number = 2;
  precoProduto2: number = 115.9;
  promocao2: boolean = true;
  foto2: string = 'assets/img/cursoJS.jpg_large';
  dataValidade2 = '2023-07-14';

  nomeProduto3: string = 'Curso Figma 2.0     ';
  idProduto3: number = 3;
  precoProduto3: number = 145.9;
  promocao3: boolean = false;
  foto3: string = 'assets/img/figma.jpg';
  dataValidade3 = '2023-07-09';

  nomeProduto4: string = 'Curso HTML + CSS';
  idProduto4: number = 4;
  precoProduto4: number = 199.9;
  promocao4: boolean = false;
  foto4: string = 'assets/img/htmlcss.jpg';
  dataValidade4 = '2023-07-21';

  nomeProduto5: string = 'Curso Flutter 2.0      ';
  idProduto5: number = 5;
  precoProduto5: number = 149.9;
  promocao5: boolean = false;
  foto5: string = 'assets/img/flutter.png';
  dataValidade5 = '2023-08-11';

  nomeProduto6: string = 'Curso React Native';
  idProduto6: number = 6;
  precoProduto6: number = 129.9;
  promocao6: boolean = true;
  foto6: string = 'assets/img/resctnative.png';
  dataValidade6 = '2023-08-02';

  listaProdutos: any[] = [
    {
      nome: 'Curso Angular',
      precoProduto: 122.5,
      validade: '2023-07-28',
      id: 1,
    },
    {
      nome: 'Curso JavaScript',
      precoProduto: 115.9,
      validade: '2023-07-14',
      id: 2,
      promocao: true,
    },
    {
      nome: 'Curso Figma 2.0',
      precoProduto: 145.90,
      validade: '2023-07-09',
      id: 3,
    },
    {
      nome: 'Curso HTML + CSS',
      precoProduto: 199.9,
      validade: '2023-07-21',
      id: 4,
    },
    {
      nome: 'Curso Flutter 2.0',
      precoProduto: 149.9,
      validade: '2023-08-11',
      id: 5,
    },
    {
      nome: 'Curso React Native',
      precoProduto: '129.9',
      validade: '2023-08-02',
      id: 6,
      promocao: true,
    },
  ];

  constructor() {}


  ngOnInit(): void {}



}

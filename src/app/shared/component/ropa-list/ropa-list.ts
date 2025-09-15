import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ropa-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './ropa-list.html',
  styleUrl: './ropa-list.css'
})
export class RopaList {
  productos = signal([
    {
      img: '/assets/products/ropa/clothes1.jpg',
      name: 'Sueter casual',
      price: 35000,
      available: false,
      desc: 'bonito sueter perfecto para climas frios'
    },
      {
      img: '/assets/products/ropa/clothes2.jpg',
      name: 'Blusa cuello cuadrado',
      price: 30000,
      available: true,
      desc: 'disponible en: blanco, terracota y gris'
    },
    {
      img: '/assets/products/ropa/clothes3.jpg',
      name: 'Camisa dos piezas casual',
      price: 31000,
      available: true,
      desc: 'sueter y blusa, perfecto para cualquier ocasión'
    },
    {
      img: '/assets/products/ropa/clothes4.jpg',
      name: 'Vestido elegante con tirantes',
      price: 55000,
      available: true,
      desc:'Lindo vestido negro de encaje con tirantes'
    },
    {
      img: '/assets/products/ropa/clothes5.jpg',
      name: 'Blusa manga larga gris',
      price: 25000,
      available: false,
      desc: 'blusa de lana manga larga, disponible solo en color gris'
    },
    {
      img: '/assets/products/ropa/clothes6.jpg',
      name: 'Conjunto elegante',
      price: 75000,
      available: true,
      desc: 'Conjunto elegante de abrigo y falda corta disponible en color beige'
    },
    {
      img: '/assets/products/ropa/clothes7.jpg',
      name: 'Vestido coquette con tirantes ajustables',
      price: 57000,
      available: true,
      desc: 'Vestido corto floreado celeste y blanco'
    },
    {
      img: '/assets/products/ropa/clothes8.jpg',
      name: 'Vestido con estampado y tirantes',
      price: 52000,
      available: true,
      desc: 'vestido con estampado de florecitas naranjas, disponible en color beige'
    },
    {
      img: '/assets/products/ropa/clothes9.jpg',
      name: 'Vestido strapless',
      price: 48500,
      available: true,
      desc: 'Vestido sin mangas, ajustable a el cuerpo con moño en la cintura, disponible en color cafe y negro'
    },
    {
      img: '/assets/products/ropa/clothes10.jpg',
      name: 'Vestido coquette con tirantes ajustables',
      price: 52700,
      available: true,
      desc: 'Vestido blanco con estampado azul, con tirantes de manga ajustables'
    },
    {
      img: '/assets/products/ropa/clothes11.jpg',
      name: 'Conjunto',
      price: 78500,
      available: true,
      desc:'Abrigo morado y vestido blanco, no incluye el bolso'
    },
    {
      img: '/assets/products/ropa/clothes12.jpg',
      name: 'Vestido cuello asimetrico',
      price: 62000,
      available: false,
      desc: 'vestido beige super dindo'
    },
    {
      img: '/assets/products/ropa/clothes13.jpg',
      name: 'Blusa cuello V',
      price: 34000,
      available: true,
      desc: 'blusa elegante con cuello en V, disponible en color blanco '
    },
    {
      img: '/assets/products/ropa/clothes14.jpg',
      name: 'Blusa blanca strapless',
      price: 24000,
      available: false,
      desc: 'Blusa elegante en color blanco sin mangas'
    },
    {
      img: '/assets/products/ropa/clothes15.jpg',
      name: 'Short elegante',
      price: 22000,
      available: true,
      desc: 'Shorts elegantes, disponible en color marfil'
    }
  ])
}

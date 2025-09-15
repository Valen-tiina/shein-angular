import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bolsos-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './bolsos-list.html',
  styleUrl: './bolsos-list.css'
})
export class BolsosList {
  productos = signal([
    {
      img: '/assets/products/bolsos/bag1.jpg',
      name: 'Bolsito lindo',
      price: 32500,
      available: true,
      desc: 'Tamaño: 30cm * 20cm'
    },
    {
      img: '/assets/products/bolsos/bag2.jpg',
      name: 'Bolso de hombro',
      price: 38000,
      available: true,
      desc: 'Por el momento solo tenemos disponible en color negro'
    },
    {
      img: '/assets/products/bolsos/bag3.jpg',
      name: 'Bolso de hombro con correa ajustable',
      price: 45500,
      available: true,
      desc: 'Cuenta con un lindo moñitoo'
    },
    {
      img: '/assets/products/bolsos/bag4.jpg',
      name: 'Bolso de mano grande',
      price: 62000,
      available: true,
      desc: 'Michael Kors ahora en Venus, no incluye el llavero'
    },
    {
      img: '/assets/products/bolsos/bag5.jpg',
      name: 'Bolso de mano grande ',
      price: 65000,
      available: true,
      desc: 'Bolso Michael Kors en cafe'
    },
    {
      img: '/assets/products/bolsos/bag6.jpg',
      name: 'Bolso negro con correa ajustable',
      price: 47800,
      available: true,
      desc: 'Correa ajustable'
    },
    {
      img: '/assets/products/bolsos/bag7.jpg',
      name: 'Bolso Gucci',
      price: 35000,
      available: true,
      desc: 'Perfecto para el dia a dia, correa ajustable'
    },
    {
      img: '/assets/products/bolsos/bag8.jpg',
      name: 'Bolso pequeño de hombro vinotinto',
      price: 45000,
      available: true,
      desc: 'Material: cuero'
    },
    {
      img: '/assets/products/bolsos/bag9.jpg',
      name: 'Bolso pequeño ',
      price: 57000,
      available: true,
      desc: 'Color cafe'
    },
    {
      img: '/assets/products/bolsos/bag10.jpg',
      name: 'Bolso con moño y correa ajustable',
      price: 60000,
      available: true,
      desc: 'Moño color celeste y correa ajustable'
    }
  ])
}

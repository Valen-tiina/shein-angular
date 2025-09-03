import { Component } from '@angular/core';
import { Header } from '../shared/component/header/header';
import { Footer } from '../shared/component/footer/footer';
import { RouterLink } from '@angular/router';
import { AccesoriosList } from '../shared/component/accesorios-list/accesorios-list';

@Component({
  selector: 'app-accesorios',
  imports: [Header, Footer, RouterLink,AccesoriosList],
  templateUrl: './accesorios.html',
  styleUrl: './accesorios.css'
})
export class Accesorios {

}

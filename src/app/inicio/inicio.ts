import { Component } from '@angular/core';
import { Header } from '../shared/component/header/header';
import { Footer } from '../shared/component/footer/footer';

@Component({
  selector: 'app-inicio',
  imports: [Header,Footer],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}

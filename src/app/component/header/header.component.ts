import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public topBarText:string;
  public title:string;
  public subtitle:string;
  public searchPlaceholder:string;
  constructor() { }

  ngOnInit() {
    this.topBarText = 'fwagner13 on GitHub';
    this.title = 'Pokémon Challenge Finder';
    this.subtitle = 'Uma busca de Pokémons paginada.';
  }

}

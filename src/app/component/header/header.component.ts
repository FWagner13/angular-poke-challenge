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
    this.title = 'The TOTVS Pokémon Challenge';
    this.subtitle = 'Uma busca paginada pelo incrível mundo Pokémon!';
  }

}

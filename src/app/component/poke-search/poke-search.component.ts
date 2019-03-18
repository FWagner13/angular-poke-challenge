import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent implements OnInit {

  public searchPlaceholder:string;
  constructor() { }

  ngOnInit() {
    this.searchPlaceholder = 'Pesquise aqui o Pokémon pelo nome ou ID';
  }

}

import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service'
import { PokeListService } from '../../service/poke-list.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})

export class PokeListComponent implements OnInit {
  activeList: string[];
  viewingPoke: boolean = false;
  private pokeListConfig = {
    count: '',
    next: '',
    previous: '',
    pokemons: [],
  };

  getNextPokeList() {
    this.pokeService.getPokeList(this.pokeListConfig.next).subscribe((data) => {

      this.pokeListConfig = {
        count: data['count'],
        next: data['next'],
        previous: data['previous'],
        pokemons: data['results'],
      };

      this.activeList = this.pokeListConfig.pokemons;

      this.subscribePages();
    });
  }

  getPreviousPokeList() {
    this.pokeService.getPokeList(this.pokeListConfig.previous).subscribe(data => {
      this.pokeListConfig = {
        count: data['count'],
        next: data['next'],
        previous: data['previous'],
        pokemons: data['results'],
      };
      this.activeList = this.pokeListConfig.pokemons;
      this.subscribePages();
    });
  }

  subscribePoke(poke) {
    this.viewingPoke = poke;
    this.pokeListService.setIsViewingPoke(true);
    this.pokeService.getPokeView(poke.name).subscribe(data => {
      console.log(data);
      this.pokeListService.setViewingPokeParams(data);
    });
  }

  subscribePages() {
    this.pokeListService.updateHasNext(!!this.pokeListConfig.next);
    this.pokeListService.updateHasPrevious(!!this.pokeListConfig.previous);
  }

  constructor(private pokeService: PokeApiService, private pokeListService: PokeListService) { }

  ngOnInit() {
    this.pokeListService.getIsViewingPoke().subscribe((bool: boolean) => this.viewingPoke = bool)
    this.pokeService.getPokeList().subscribe((data) => {

      this.pokeListConfig = {
        count: data['count'],
        next: data['next'],
        previous: data['previous'],
        pokemons: data['results'],
      };
      this.activeList = this.pokeListConfig.pokemons;
      this.subscribePages();
      console.log(this.pokeListConfig);
    });
  }
  
}

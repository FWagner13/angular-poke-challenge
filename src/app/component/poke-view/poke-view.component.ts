import { Component, OnInit } from '@angular/core';
import { PokeListService } from 'src/app/service/poke-list.service';

@Component({
  selector: 'poke-view',
  templateUrl: './poke-view.component.html',
  styleUrls: ['./poke-view.component.css']
})
export class PokeViewComponent implements OnInit {
  isViewingPoke = false;
  viewingPokeParams = this.resetPokeModel();

  resetPokeModel() {
    return {
      abilities: '',
      base_experience: '',
      forms: '',
      game_indices: '',
      height: '',
      held_items: '',
      id: '',
      is_default: '',
      location_area_encounters: '',
      moves: '',
      name: '',
      order: '',
      species: '',
      sprites: '',
      stats: '',
      types: '',
      weight: ''
    };
  }

  unsubscribePoke() {
    this.viewingPokeParams = this.resetPokeModel();
    this.isViewingPoke = false;
    this.pokeListService.setIsViewingPoke(false);
  }

  constructor(private pokeListService: PokeListService) { }

  ngOnInit() {
    this.pokeListService.getIsViewingPoke().subscribe((bool: boolean) => this.isViewingPoke = bool);
    this.pokeListService.getViewingPokeParams().subscribe(params => this.viewingPokeParams = params);
  }

}

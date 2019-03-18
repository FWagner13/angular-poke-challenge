import { Component, OnInit, Input } from '@angular/core';
import { PokeListComponent } from '../poke-list/poke-list.component';
import { PokeListService } from '../../service/poke-list.service';

@Component({
  selector: 'poke-footer',
  templateUrl: './poke-footer.component.html',
  styleUrls: ['./poke-footer.component.css']
})
export class PokeFooterComponent implements OnInit {

  @Input() pokeList: PokeListComponent;
  hasNext:boolean = false;
  hasPrevious:boolean = false;
  isViewingPoke:boolean = false;

  constructor(private pokeListService: PokeListService) { }

  nextTrigger() {
    if(this.hasNext) {
      this.pokeList.getNextPokeList();
    }
  }

  previousTrigger() {
    if(this.hasPrevious) {
      this.pokeList.getPreviousPokeList();
    }
  }

  ngOnInit() {
    this.pokeListService.getHasNext().subscribe((bool:boolean) => this.hasNext = bool);
    this.pokeListService.getHasPrevious().subscribe((bool:boolean) => this.hasPrevious = bool);
    this.pokeListService.getIsViewingPoke().subscribe((bool:boolean) => this.isViewingPoke = bool);
  }
}

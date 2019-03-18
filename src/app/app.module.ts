import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { PokeSearchComponent } from './component/poke-search/poke-search.component';
import { PokeListComponent } from './component/poke-list/poke-list.component';
import { PokeFooterComponent } from './component/poke-footer/poke-footer.component';
import { PokeViewComponent } from './component/poke-view/poke-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeFooterComponent,
    PokeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

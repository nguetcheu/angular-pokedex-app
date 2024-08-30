import { Component, computed, effect, signal } from '@angular/core';
import { POKEMON_LIST } from './pokemon-list.fake';
import { iterator } from 'rxjs/internal/symbol/iterator';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}

  name = signal('Pikachu');
  imageSrc = signal(
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png'
  );
  size(pokemon: Pokemon) {
    if (pokemon.life <= 15) {
      return 'Petit';
    }
    if (pokemon.life >= 25) {
      return 'Grand';
    }

    return 'Moyen';
  }
  pokemonList = signal(POKEMON_LIST);
  pokemonId = signal(0);

  incrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life + 1;
  }

  decrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life - 1;
  }
}

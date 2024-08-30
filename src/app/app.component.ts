import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = signal('Pikachu');
  life = signal(21); // signal de base et un signal est une fonction
  imageSrc = signal('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png');
  taille = computed(() => {
    if (this.life() <= 15) {
      return 'Petit';
    }

    if (this.life() > 15 && this.life() < 25) {
      return 'Normal';
    }
    return 'Grand';
  });

  doubleLife = computed(() => this.life() * 2); // signal dérivé

  constructor() {
    effect(() => {
      console.log('La vie du pokémon a été mis à jour :', this.life());
    }); // Permet d'interagir avec toute les mises a jour d'un signal
  }

  incrementLife() {
    this.life.update((n) => n + 1); // update permet de mettre a jour l'état d'un signal avec une fonction
  }

  decrementLife() {
    this.life.update((n) => n - 1);
  }
}

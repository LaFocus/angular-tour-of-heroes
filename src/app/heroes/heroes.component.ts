import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { NgFor, NgIf } from '@angular/common';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit {
  heroes!: Hero[];

  selectedHero!: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  
  
  getHeroes(): void {
    of(this.heroService.getHeroes())
    .subscribe((heroes: any) => this.heroes = heroes);
  }
  
  constructor(private heroService: HeroService) {}
  
  ngOnInit(): void {
    console.log(this.heroService.getHeroes());
    this.getHeroes();
  }
}
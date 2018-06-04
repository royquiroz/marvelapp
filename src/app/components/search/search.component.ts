import { Component, OnInit } from "@angular/core";
import { MarvelService } from "../../services/marvel.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html"
})
export class SearchComponent {
  heroes: any[] = [];
  data: any;
  loading: boolean;

  constructor(private marvel: MarvelService, private router: Router) {}

  buscar(personaje: string) {
    if (personaje.length <= 0) {
      return (this.loading = false);
    }
    this.loading = true;

    this.marvel.getCharacters(personaje).subscribe((data: any) => {
      this.heroes = data.data.results;
      this.data = data;

      this.loading = false;
    });
  }

  verPersonaje(heroe: any) {
    let characterId: number = heroe.id;

    this.router.navigate(["/character", characterId]);
  }
}

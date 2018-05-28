import { Component, OnInit } from "@angular/core";
import { MarvelService } from "../../services/marvel.service";

@Component({
  selector: "app-personajes",
  templateUrl: "./personajes.component.html"
})
export class PersonajesComponent implements OnInit {
  heroes: any[] = [];

  constructor(private marvel: MarvelService) {}

  buscar(personaje: string) {
    console.log(personaje);
    this.marvel.getCharacters(personaje).subscribe(data => {
      console.log(data.data.results);
      this.heroes = data.data.results;
    });
  }
}

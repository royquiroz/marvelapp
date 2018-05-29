import { Component, OnInit } from "@angular/core";
import { MarvelService } from "../../services/marvel.service";

@Component({
  selector: "app-personajes",
  templateUrl: "./personajes.component.html"
})
export class PersonajesComponent{
  heroes: any[] = [];
  data: any;
  loading: boolean;

  constructor(private marvel: MarvelService) {}

  buscar(personaje: string) {
    
    this.loading = true;

    this.marvel.getCharacters(personaje).subscribe((data: any) => {
      this.heroes = data.data.results;
      this.data = data

      this.loading = false;

    });
  }

  verPersonaje(heroe: any){
    console.log(heroe);
  }
}



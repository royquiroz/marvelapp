import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MarvelService } from "../../services/marvel.service";

@Component({
  selector: "app-character",
  templateUrl: "./character.component.html",
  styles: []
})
export class CharacterComponent {
  character: any = {};
  img: string;
  comics: any = {
    isComics: false
  };
  events: any = {
    isEvents: false
  };

  constructor(private marvel: MarvelService, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.getCharacterForId(params["id"]);
    });
  }

  getCharacterForId(id: number) {
    this.marvel.getCharacterForId(id).subscribe((data: any) => {
      console.log(data);
      this.character = data;
      this.img = data.thumbnail.path + "." + data.thumbnail.extension;
    });
  }

  showComics(data: any) {
    this.comics.comics = data;
    this.comics.isComics = !this.comics.isComics;
  }

  showEvents(data: any) {
    this.events.events = data;
    this.events.isEvents = !this.events.isEvents;
  }
}

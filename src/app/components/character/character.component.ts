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

  constructor(private marvel: MarvelService, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.getCharacterForId(params["id"]);
    });
  }

  getCharacterForId(id: number) {
    this.marvel.getCharacterForId(id).subscribe((data: any) => {
      console.log(data);
      this.character = data.data.results[0];
    });
  }
}

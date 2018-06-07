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
  series: any = {
    isSeries: false
  };
  stories: any = {
    isStories: false
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
      this.showComics(data.comics);
    });
  }

  showComics(data: any) {
    this.comics.comics = data;
    this.comics.isComics = !this.comics.isComics;
    if (
      this.events.isEvents === true ||
      this.series.isSeries === true ||
      this.stories.isStories === true
    ) {
      this.events.isEvents = false;
      this.series.isSeries = false;
      this.stories.isStories = false;
    }
  }

  showEvents(data: any) {
    this.events.events = data;
    this.events.isEvents = !this.events.isEvents;
    if (
      this.comics.isComics === true ||
      this.series.isSeries === true ||
      this.stories.isStories === true
    ) {
      this.comics.isComics = false;
      this.series.isSeries = false;
      this.stories.isStories = false;
    }
  }

  showSeries(data: any) {
    this.series.series = data;
    this.series.isSeries = !this.series.isSeries;
    if (
      this.events.isEvents === true ||
      this.comics.isComics === true ||
      this.stories.isStories === true
    ) {
      this.events.isEvents = false;
      this.comics.isComics = false;
      this.stories.isStories = false;
    }
  }

  showStories(data: any) {
    this.stories.stories = data;
    this.stories.isStories = !this.stories.isStories;
    if (
      this.events.isEvents === true ||
      this.series.isSeries === true ||
      this.comics.isComics === true
    ) {
      this.events.isEvents = false;
      this.series.isSeries = false;
      this.comics.isComics = false;
    }
  }
}

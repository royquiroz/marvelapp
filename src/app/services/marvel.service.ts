import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MarvelService {
  constructor(private http: HttpClient) {
    console.log("Marvel Service Listo");
  }

  getCharacters(personaje: string) {
    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${ personaje }&orderBy=name&ts=8&apikey=ab65da5da7c049159114fbc2e1225330&hash=935fd86acaead0a52ff428de7d14a83c`
    );
  }

  getCharacterForId(characterId: number) {
    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters/${ characterId }?ts=8&apikey=ab65da5da7c049159114fbc2e1225330&hash=935fd86acaead0a52ff428de7d14a83c`
    );
  }
}

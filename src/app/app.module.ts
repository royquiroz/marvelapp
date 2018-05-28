import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { APP_ROUTING } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";

//Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PersonajesComponent
  ],
  imports: [BrowserModule, HttpClientModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

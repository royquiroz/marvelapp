import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CharacterComponent } from './components/character/character.component';


const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'character/:id', component: CharacterComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: false });
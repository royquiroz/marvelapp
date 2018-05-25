import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';


const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'personajes', component: PersonajesComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
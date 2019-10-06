import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'lista-pokemons', loadChildren: './lista-pokemons/lista-pokemons.module#ListaPokemonsPageModule' },
  { path: 'bulbasaur', loadChildren: './pokemons/bulbasaur/bulbasaur.module#BulbasaurPageModule' },
  { path: 'charmander', loadChildren: './pokemons/charmander/charmander.module#CharmanderPageModule' },
  { path: 'squirtle', loadChildren: './pokemons/squirtle/squirtle.module#SquirtlePageModule' },
  { path: 'pikachu', loadChildren: './pokemons/pikachu/pikachu.module#PikachuPageModule' },
  { path: 'gengar', loadChildren: './pokemons/gengar/gengar.module#GengarPageModule' },
  { path: 'articuno', loadChildren: './pokemons/articuno/articuno.module#ArticunoPageModule' },
  { path: 'zapdos', loadChildren: './pokemons/zapdos/zapdos.module#ZapdosPageModule' },
  { path: 'moltres', loadChildren: './pokemons/moltres/moltres.module#MoltresPageModule' },
  { path: 'chikorita', loadChildren: './pokemons/chikorita/chikorita.module#ChikoritaPageModule' },
  { path: 'umbreon', loadChildren: './pokemons/umbreon/umbreon.module#UmbreonPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.page.html',
  styleUrls: ['./lista-pokemons.page.scss'],
})
export class ListaPokemonsPage implements OnInit {


  public listaPokemons = [
    
    { nome: 'Bulbasaur',   pagina:"/bulbasaur"   ,cor:"success"    ,tipo:"Grass",    numero: "001",   img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" },
    { nome: 'Charmander',  pagina:"/charmander"  ,cor:"danger"     ,tipo:"Fire",     numero: "004",   img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" },
    { nome: 'Squirtle',    pagina:"/squirtle"    ,cor:"primary"    ,tipo:"Water",    numero: "007",   img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" },
    { nome: 'Pikachu',     pagina:"/pikachu"     ,cor:"warning"    ,tipo:"Eletric",  numero: "025",  img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" },
    { nome: 'Gengar',      pagina:"/gengar"      ,cor:"tertiary"   ,tipo:"Ghost",    numero: "094",  img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png" },
    { nome: 'Articuno',    pagina:"/articuno"    ,cor:"secondary"  ,tipo:"Ice",      numero: "144", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/144.png" },
    { nome: 'Zapdos',      pagina:"/zapdos"      ,cor:"warning"    ,tipo:"Eletric",  numero: "145", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/145.png" },
    { nome: 'Moltres',     pagina:"/moltres"     ,cor:"danger"     ,tipo:"Fire",     numero: "146", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/146.png" },
    { nome: 'Chikorita',   pagina:"/chikorita"   ,cor:"success"    ,tipo:"Grass",    numero: "152", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png" },
    { nome: 'Umbreon',     pagina:"/umbreon"     ,cor:"dark"       ,tipo:"Dark",     numero: "197", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" }
  ];// variavel do tipo array, contendo uma lista de pokemons.
  
  constructor() { }

  ngOnInit() {
  }

}

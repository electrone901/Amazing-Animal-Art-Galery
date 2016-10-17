import React from 'react';
import {Link} from 'react-router';

var Search = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
  
    if (!this.props.pokemon){
      return null;
    } 
    
    var pokemon = this.props.pokemon;
    console.log(pokemon);
    
    var types = pokemon.types.map(function(obj, index){
        return(
          <li  key = {index}>
                 {obj.type.name}
          </li>
        );
    });

   var stats = pokemon.stats.map(function(obj, index){
     return(
       <li  key = {index}>
            {obj.stat.name} : {obj.base_stat}
       </li>
     );
   });
    return (
      <div>
        <h2>{pokemon.name} </h2>
        <img src={pokemon.sprites.front_default} alt="Pokemon Image" />
        <h4> Type: </h4>
        <ul>
          {types}
        </ul>
        <h4> Stats: </h4>
        <ul>
          {stats}
        </ul>
      </div>
    )
  }
})


var PokemonSearch = React.createClass({
  getInitialState: function() {
    return { pokemon: ''};
  },
  handlePokemonChange: function(e) {
   // this.setState({pokemon: e.target.value});
    this.props.onChange(e.target.value);
  },
  render: function() {
    return (
      <input className="form-control"
        type="text"
        placeholder="Pokemon name"
        
        onChange={this.handlePokemonChange}
      />
    )
  }
})


var PokemonList = React.createClass({
  handleClick: function(pokemon){
      console.log('clicked on ' + pokemon.name);
      this.props.onChange(pokemon);
  },
  handleClick2: function(event){
     // console.log('clicked on ' + pokemon.name);
    this.props.onChange(event.target.innerHTML);
  },
  render: function() {

    if (this.props.data.length === 0){
      return null;
    }
    // Sorting alphabetically
    this.props.data.sort(function(firstPoke, secondPoke){
      return firstPoke.name > secondPoke.name ? 1 : -1;
    });

    // Saving 'this' context for use in the callback function provided for 'map'
    var that = this;

    var pokemonNodes = this.props.data.map(function(pokemon, index){
      return(
        <li onClick={that.handleClick.bind(that,pokemon)} className="list-group-item" key = {index}>
           {pokemon.name}
        </li>
      );
    });
    return (
        <ul className = "list-group pokemonList">
          {pokemonNodes}
        </ul>
    )
  }
})

var Pokedex = React.createClass({
  getInitialState: function() {
    return {originalList: [], filteredList: [], imageSrc: ''};
  },
  componentWillMount: function() {
      this.loadPokemonList();
  },
  loadPokemonList: function(){
    console.log('loading pokemon list');
    $.ajax({
        url: this.props.url + "?limit=820",
        dataType: 'json',
        cache: true,
        success: function(data){
          console.log("loaded pokemon list from API");

          this.setState({originalList: data.results, 
                         filteredList: data.results})
        }.bind(this),
        error: function(xhr, status, err) {
           console.log("error")
           console.error(this.props.url, status, err.toString());
        }.bind(this),
	       timeout:10000
    });
  },

  handlePokemonClick: function(pokemon) {
    console.log('url: ' + pokemon.url);
    $.ajax({
        url: pokemon.url ,
        dataType: 'json',
        cache: true,
        success: function(data){
         // console.log("loaded pokemon details");
          //console.log(data);
          this.setState({selectedPokemon: data})
        }.bind(this),
        error: function(xhr, status, err) {
           console.log("error")
           console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
  },

  handlePokemonSearch: function(name){
     // If user cleared the search field
     if (name === ""){
       this.setState({filteredList: this.state.originalList})
       return;
     }
     var filteredList = this.state.originalList.filter(function(pokemon){
         return (pokemon.name.indexOf(name) !== -1);
     })
     //console.log(filteredList);
     this.setState({filteredList: filteredList});
  },
  render: function(){
    return (
      <div className = "pokedex">
        <h1> ReactJS Pokedex </h1>

 	 <div className="col-md-4">
           <PokemonSearch onChange = {this.handlePokemonSearch} />
           <PokemonList onChange = {this.handlePokemonClick} data = {this.state.filteredList} />
         </div>

 	  <div className="col-md-offset-1 col-md-6">
           <PokemonInfo  pokemon={this.state.selectedPokemon}/>
        </div>
      </div>
    );
  }
});

export default Search;



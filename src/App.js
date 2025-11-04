import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  //Constructor
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      characters: [],
      searchField: "",
    };
  }

  //onMount
  componentDidMount() {
    console.log("DidMount");
    fetch("https://api.sampleapis.com/futurama/characters")
      .then((response) => response.json()) //Cualquier cosa devuelta de la API se guarda en response
      .then((users) =>
        this.setState(
          () => {
            return { characters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      ); //Cualquier cosa devuulta por el then anterior se guardará en users
  }

  //función que ejecutamos a cada cambio en el input
  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }; //Mismo nombre propiedad y variable, no hace falta poner los dos: { searchField: searchField }
    });
  };

  //renderizamos
  render() {
    console.log("Render");
    const { onSearchChange } = this; // Traigo la función a una variable dentro del render().
    const {characters, searchField} = this.state //Traigo las variables de estado
    
    const filterCharacters = characters.filter(
      (c) =>
        c.name.first.toLowerCase().includes(searchField) ||
        c.name.middle.toLowerCase().includes(searchField) ||
        c.name.last.toLowerCase().includes(searchField)
    );

    //template
    return (
      <div className="App">
        <header className="App-header">
          <h1>My favourite characters of Futurama</h1>

          <input
            className="search-box"
            type="search"
            placeholder="search characters"
            onChange={onSearchChange}
          />

          {filterCharacters.map((c) => (
            <div key={c.id}>
              <h3>
                {c.name.first} {c.name.middle} {c.name.last}
              </h3>
              <img src={c.images.main} alt={c.name.first}></img>
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;

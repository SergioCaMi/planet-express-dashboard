import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch("https://api.sampleapis.com/futurama/characters")
      .then((response) => response.json()) //Cualquier cosa devuelta de la API se guarda en response
      .then((users) =>
        this.setState(() => {
          return { characters: users };
        },
        ()=>{
          console.log(this.state)
        }
      )
      ); //Cualquier cosa devuulta por el then anterior se guardará en users
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My favourite characters of Futurama</h1>
          {this.state.characters.map((c) => (
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

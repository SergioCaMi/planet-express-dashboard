import { Component } from "react";
import './card-list.styles.css';
import './card.styles.css';
class CardList extends Component {
  render() {
    console.log("Props: ", this.props);
    const { characters } = this.props;
    return (
      <div className="card-list">
        {characters.map((c) => {
            const { id, species, occupation } = c;
            const name = `${c.name.first} ${c.name.middle} ${c.name.last}`;
            const image = c.images.main;
            return (
          <div className="card-container" key={id}>
            <img
              src={image}
              alt={name}
            />
            <h2>
              {name}
            </h2>
            <p>
             {species} - {occupation}
            </p>
          </div>
        )})}
      </div>
    );
  }
}

export default CardList;

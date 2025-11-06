import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";
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
              <Card key={id} name={name} species={species} occupation={occupation} image={image} />
            );
        })}
      </div>
    );
  }
}

export default CardList;

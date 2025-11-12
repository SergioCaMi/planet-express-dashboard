import React from 'react';
import "./card-img.styles.css";

// *** Function Component ***
const Card = ({ id, name, species, occupation, image }) => {
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
    );
};

export default Card;

// *** Class Component ***
// class Card extends Component {
//     render() {
//         const { id, name, species, occupation, image } = this.props;
//         return (
//           <div className="card-container" key={id}>
//             <img
//               src={image}
//               alt={name}
//             />
//             <h2>
//               {name}
//             </h2>
//             <p>
//              {species} - {occupation}
//             </p>
//           </div>
//         );
//     }
// }
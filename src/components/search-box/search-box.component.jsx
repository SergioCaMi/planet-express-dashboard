import React from 'react';
import './search-box.styles.css';

// *** Function Component ***
const SearchBox = ({ className, placeholder, onSearchChange }) => {
    return (
        <div>
            <input
                className={`search-box ${className}`}
                type="search"
                placeholder={placeholder}
                onChange={onSearchChange}
            />
        </div>
    );
};

export default SearchBox;

// *** Class Component ***
// class SearchBox extends Component {
//     render() {
//         return (
//             <div>
//           <input
//             className={`search-box ${this.props.className}`}
//             type="search"
//             placeholder={this.props.placeholder}
//             onChange={this.props.onSearchChange}
//           />
//             </div>
//         );
//     }
// }
import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';


class ColorSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: 1,
    };
    this.determineStyle = this.determineStyle.bind(this);
  }

  getImages() {
    // let starter;
    axios.get('http://localhost:5000/serial/A1057-307-00')
      .then(() => {
       // starter = response.data.images[0];
        // onsole.log(starter, 'starter');
        this.setState({
          selectedImage: 0,
        });
      })
      .catch((error) => {
        throw Error(error);
      });
  }

  determineStyle(index) {
    const { selectedImage } = this.state;
    const isItemSelected = (selectedImage === index);
    return isItemSelected ? '1px solid black' : '1px solid lightgrey';
  }


  render() {
    const { action } = this.props;
    const { colors } = this.props;
    return (
      <ul>
        {colors ? colors.map((product, index) => (
          <li className="color-gallery-image">
            {/* eslint-disable-next-line */}
            <img
              className="color-thumb"
              src={product.images[0]}
              index={index}
              onClick={() => {
                this.setState({ selectedImage: index });
                action(product.product_serial);
              }}
              style={{ border: this.determineStyle(index) }}
              alt={product.color}
            />
          </li>
        )) : 'Getting Data'}

      </ul>
    );
  }
}

ColorSelect.propTypes = {
  action: propTypes.func.isRequired,
  colors: propTypes.arrayOf(propTypes.oneOfType([propTypes.number, propTypes.string])),
};

export default ColorSelect;

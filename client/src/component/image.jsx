import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import InnerImageZoom from 'react-inner-image-zoom';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImage: 'https://media.complex.com/campaigns/2014-q4/nixon-spectrum/mobile/nixon_cover.jpg',

    };
    this.setMainImage = this.setMainImage.bind(this);
  }

  componentDidMount() {
    this.setMainImage();
  }

  // receives the new current key from props changed by product gallery component
  UNSAFE_componentWillReceiveProps({ currentKey }) {
    const newKey = currentKey;
    let newImage;
    const { serial } = this.props;
    axios.get(`http://localhost:5000/serial/${serial}`)
      .then((response) => {
        console.log(response.data.images)
        newImage = response.data.images[newKey];
        this.setState({
          mainImage: newImage,
        });
      })
      .catch((error) => {
        throw Error(error);
      });
  }

  // sets the main image to be the 0th index at start
  setMainImage() {
    axios.get('http://localhost:5000/serial/A1057-307-00')
      .then((response) => {
        const starter = response.data.images[0];
        this.setState({
          mainImage: starter,
        });
      })
      .catch((error) => {
        throw Error(error);
      });
  }


  render() {
    const { mainImage } = this.state;
    return (
      <div>
        <InnerImageZoom id="main" src={mainImage} />
      </div>
    );
  }
}

Image.propTypes = {
  currentKey: propTypes.number.isRequired,
  serial: propTypes.string,
};

export default Image;

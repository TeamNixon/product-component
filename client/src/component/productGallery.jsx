import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

class ProductGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: null,
    };
    this.determineStyle = this.determineStyle.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }


  // to make it restart at 0 index with new color click,
  // changekey needs to be called to update in the parent component.

  // componentWillReceiveProps(){
  //   this.getImages();
  //  changeKey(0);
  // }

  getImages() {
    const { serial } = this.props;

    let thisSerial = serial
    if(!thisSerial){thisSerial = 'A1057-307-00'}

    axios.get(`http://localhost:5000/serial/${thisSerial}`)
      .then(() => {
        // console.log(starter, 'starter');
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
    // check if there's a default selected image, if not set it to 0
    if (selectedImage === null) { this.setState({ selectedImage: 0 }); }
    const isItemSelected = (selectedImage === index);
    return isItemSelected ? '1px solid black' : '1px solid lightgrey';
  }

  render() {
    const { action } = this.props;
    const changeKey = action;
    const { images } = this.props;
    return (
      <div>
        <ul>
          {images ? images.map((image, index) => (
            <li className="product-gallery-image">
              {/* eslint-disable-next-line */}
              <img
                className="disp-thumb"
                src={image}
                key={index}
                onClick={() => {
                  this.setState({ selectedImage: index });
                  changeKey(index);
                }}
                style={{ border: this.determineStyle(index) }}
                alt="product image"
              />
            </li>
          )) : 'Getting Product Data..'}
        </ul>
      </div>
    );
  }
}

ProductGallery.propTypes = {
  serial: propTypes.string,
  action: propTypes.func.isRequired,
  images: propTypes.arrayOf(propTypes.oneOfType([propTypes.string])),

};

export default ProductGallery;

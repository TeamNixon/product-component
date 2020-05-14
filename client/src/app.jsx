import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

import ProductGallery from './component/productGallery';
import Image from './component/image';
import ColorSelect from './component/colorSelect';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      currentKey: 0,
      colors: null,
    };
    this.getProductBySerial = this.getProductBySerial.bind(this);
    this.changeKey = this.changeKey.bind(this);
    this.getColors = this.getColors.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  // render product by serial at start of load
  // do  colors request in same initialization for the color gallery
  componentDidMount() {
    this.getProductBySerial('A1057-307-00');
  }


  // axios request function
  // also is initialization
  getProductBySerial(serial) {

    let productName;
    let thisSerial = serial;
    // if serial is empty(at beginning) give it a default
    if (!thisSerial) {
      thisSerial = 'A1057-307-00';
    }

    axios.get(`http://localhost:5000/serial/${thisSerial}`)
      .then((response) => {
        console.log(response)
        const product = response.data;
        productName = response.data.product_name;
        // console.log(product, "response data");
        this.setState({ product });
        // replace spaces with dashes for formatting in db
        productName = productName.replace(/\s+/g, '-');
        // console.log('productname replace', productName);
        axios
          .get(`http://localhost:5000/product/${productName}`)
          .then((data) => {
            const colors = data.data;
            this.setState({
              colors,
            });
          });
      })
    // initialize colors
      .catch((error) => {
        throw Error(error);
      });
  }

  getColors() {
    // eslint-disable-next-line
    const { product_name } = this.state.product;
    let urlProduct = product_name;
    urlProduct = urlProduct.replace(/\s+/g, '-');
    console.log('productname replace', urlProduct);
    axios
      .get(`http://localhost:5000/product/${product_name}`)
      .then((response) => {
        const colors = response.data;
        this.setState({
          colors,
        });
      })
      .catch((error) => {
        throw Error(error);
      });;
  }

  addToCart(){
    const {product_serial} = this.state.product
    axios
    .post(product_serial)
    .then((response) => console.log(response))
    .catch((error) => {
      throw Error(error);
    });
  }

  // method to handle communication of key from product gallery to main image.
  changeKey(key) {
    this.setState({
      currentKey: key,
    });
  }



  render() {
    const { currentKey } = this.state;
    const { product } = this.state;
    const {
      product_name, product_size, color, product_description,
      product_rating, reviews_amount, discounted_price, images, product_serial,
    } = product;
    const { colors } = this.state;
    return (


      <div id="product-container">

        <div id="product-display">

          <div id="desc-col1">
            <div id="product-nav">
              <p>
                <a href="https://www.nixon.com/us/en"> Home </a>
                {' '}
                &gt;
                <a href="https://www.nixon.com/us/en/mens-watches"> Men&apos;s Watches </a>
                {' '}
                &gt;
                {product_name}
              </p>
            </div>
            <div id="face-size">
              {product_size}
              mm
            </div>
            <div id="product-name">
              <h2>{product_name}</h2>
            </div>
            <div id="product-color">
              {color}
            </div>
            <div id="product-rating">
              <StarRatings
              rating={product_rating}
              numberOfStars={5}
              starDimension="12px"
              starRatedColor="black"
              starSpacing="2px"/>
              {' '}
              {reviews_amount}
              {' '}
              reviews
            </div>
            <div id="product-desc">
              <p>{product_description}</p>
            </div>

            <div id="product-gallery">
              <ProductGallery
                currentKey={currentKey}
                images={images}
                action={this.changeKey.bind(this)}
                serial={product_serial}
              />

            </div>
          </div>


        </div>
        <div id="image-col2">
          <Image
            currentKey={currentKey}
            images={images}
            serial={product_serial}
          />
        </div>

        <div id="select-col3">
          <div id="specs">
            <div id="color">
              Color
              <div id="serial">
                {product_serial}
              </div>
              <br />
              <br />
              {' '}
              {product.color}
            </div>
          </div>
          <div id="color-picker">
            <ColorSelect
              currentKey={currentKey}
              colors={colors}
              action={this.getProductBySerial.bind(this)}
            />
          </div>
          <div id="price-info">
            <h3>
              $
              {discounted_price}
              .00
            </h3>
            <p id="afterpay">
              or 4 installments of $
              {discounted_price / 4}
              {' '}
              with
              <a href="http://www.afterpay.com">
                <img
                  id="afterpay-img"
                  src="https://www.nixon.com/on/demandware.static/Sites-US-Site/-/default/dw88242a78/images/afterpay-logo.png"
                  alt="afterpay logo"
                />
              </a>
            </p>
          </div>

          <div id="payment">
            <button id="add-to-cart" type="button" onClick={this.addToCart}>
              Add to My Cart
            </button>
            <a href="http://www.nixon.com/wishlist">
              <button id="wl" type="button">
                <i className="far fa-heart" />
              </button>
            </a>
          </div>

          <div id="promo-message">
            <img alt="" className="icon" src="https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dw5113921a/truck-icon.png" title="" />
            <p id="promo-text">Free Shipping + Free Returns</p>
          </div>

          <div id="callout"><hr /></div>


        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

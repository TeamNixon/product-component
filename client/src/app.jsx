import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ProductGallery from './component/productGallery.jsx';
import Image from './component/image.jsx';
import ColorSelect from './component/colorSelect.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      currentKey: 0,
      colors: null,
    }
    this.getProductBySerial = this.getProductBySerial.bind(this);
    this.changeKey = this.changeKey.bind(this);
  }

//render product by serial at start of load
//do  colors request in same initialization for the color gallery
componentDidMount(){
  this.getProductBySerial();
}


//axios request function
//also is initialization
getProductBySerial(serial){
  let productName;
  //if serial is empty(at beginning) give it a default
  if(!serial){
    serial = '/api/A105-2687-00'
  }

  axios.get(serial)
  .then((response) => {
    let product = response.data;
    productName = response.data.product_name;
    //console.log(product, "response data");
    this.setState({product: product,});
    //replace spaces with dashes for formatting in db
    productName = productName.replace(/\s+/g, '-');
    //console.log('productname replace', productName);
    axios
        .get(`/api/product/${productName}`)
        .then((response)=>{
          let colors = response.data;
          this.setState({
            colors: colors,
          })
        })
  })
  //initialize colors
  .catch(function(error){
    console.error(error);
  });
}

getColors(product){
  let productName;
  productName = this.state.product.product_name;
  productName = productName.replace(/\s+/g, '-');
  //console.log('productname replace', productName);
  axios
    .get(`/api/product/${productName}`)
    .then((response)=>{
      let colors = response.data;
      this.setState({
        colors: colors,
      })
    })
}

//method to handle communication of key from product gallery to main image.
changeKey(key){
  this.setState({
    currentKey: key,
  })
}

  render() {
    return (


      <div id="product-container">

      <div id="product-display">

        <div id="desc-col1">
        <div id="product-nav">
          <p><a href="https://www.nixon.com/us/en"> Home </a> >
          <a href="https://www.nixon.com/us/en/mens-watches"> Men's Watches </a> > {this.state.product.product_name}</p>
        </div>
          <div id="face-size">
            {this.state.product.product_size}mm
          </div>
          <div id="product-name">
            <h2>{this.state.product.product_name}</h2>
          </div>
          <div id="product-color">
            {this.state.product.color}
          </div>
          <div id="product-rating">
            {this.state.product.product_rating}  | {this.state.product.reviews_amount} reviews
          </div>
          <div id="product-desc">
            <p>{this.state.product.product_description}</p>
          </div>

          <div id="product-gallery">
            < ProductGallery
            currentKey={this.state.currentKey}
            images={this.state.product.images}
            action={this.changeKey.bind(this)}
            serial={this.state.product.product_serial}/>

          </div>
        </div>


      </div>
      <div id="image-col2">
        <Image currentKey={this.state.currentKey} images={this.state.product.images} serial={this.state.product.product_serial}/>
      </div>

      <div id="select-col3">
        <div id="specs">
          <div id="color">
          Color
          <div id="serial">
            {this.state.product.product_serial}
          </div>
           <br /><br /> {this.state.product.color}
          </div>
        </div>
        <div id="color-picker">
          <ColorSelect currentKey={this.state.currentKey} colors={this.state.colors} action={this.getProductBySerial.bind(this)} />
        </div>
        <div id="price-info">
        <h3>${this.state.product.discounted_price}.00</h3>
        <p id="afterpay">or 4 installments of ${this.state.product.discounted_price/4} with
          <a href="http://www.afterpay.com">
            <img id="afterpay-img" src="https://www.nixon.com/on/demandware.static/Sites-US-Site/-/default/dw88242a78/images/afterpay-logo.png"></img></a>
        </p>
        </div>

      <div id="payment">
      <button id="add-to-cart">
        Add to My Cart
      </button>
      <a href="http://www.nixon.com/wishlist"><button id="wl"><i className="far fa-heart"></i></button></a>
      </div>

      <div id="promo-message">
      <img alt="" className="icon" src="https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dw5113921a/truck-icon.png" title=""></img>
      <p id="promo-text">Free Shipping + Free Returns</p>
      </div>

      <div id="callout"><hr></hr></div>


      </div>
     </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Image from './component/image.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    }
    this.getProductBySerial = this.getProductBySerial.bind(this);
  }


ComponentDidMount(){
  axios.get('/api/A1057-307-00')
  .then((response) => {
    response.json();
    //console.log('json', response.json())
  })
  .then(json => {
    this.setState({
      product: json
    });
  })
  .catch(function(error){
    console.log(error);
  })
}

getProductBySerial(serial){
  axios.get('/api/A1057-307-00')
  .then((response) => {
    let product = response.data;
    //console.log(product, "response data");
    this.setState({product: product,});
  })
  .catch(function(error){
    console.log(error);
  })
}

  render() {
    return (


      <div id="product-container" onClick={this.getProductBySerial}>

      <div id="product-display">

        <div id="desc-col1">
        <div id="product-nav">
          Men's > Watches > {this.state.product.product_name}
      </div>
          <div id="face-size">
            {this.state.product.product_size}
          </div>
          <div id="product-name">
            <h1>{this.state.product.product_name}</h1>
          </div>
          <div id="product-color">
            {this.state.product.color}
          </div>
          <div id="product-rating">
            {this.state.product.product_rating} STARS HERE {this.state.product.reviews_amount} reviews
          </div>
          <div id="product-desc">
            <p>{this.state.product.product_description}</p>
          </div>
          <div id="btn360">
            <button type="submit" > View in 360</button>
          </div>
          <div id="product-gallery">
            <ul>
              <li className="product-gallery-image"><img className="disp-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb1"/></li>
              <li className="product-gallery-image"><img className="disp-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb2"/></li>
              <li className="product-gallery-image"><img className="disp-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb3"/></li>
              <li className="product-gallery-image"><img className="disp-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb4"/></li>
            </ul>
          </div>
        </div>


      </div>
      <div id="image-col2">
        <Image images={this.state.product.images} />
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
          <ul>
              <li className="color-gallery-image"><img className="color-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb1"/></li>
              <li className="color-gallery-image"><img className="color-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb2"/></li>
              <li className="color-gallery-image"><img className="color-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb3"/></li>
              <li className="color-gallery-image"><img className="color-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb4"/></li>
              <li className="color-gallery-image"><img className="color-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb4"/></li>
            </ul>
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


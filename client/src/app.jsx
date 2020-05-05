import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
    console.log('json', response.json())
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
    console.log(product, "response data");
    this.setState({product: product,});
  })
  .catch(function(error){
    console.log(error);
  })
}

  render() {
    return (


      <div id="product-container">

      <div id="product-display">

        <div id="desc-col1">
        <div id="product-nav">
          Men's > Watches > {this.state.product.product_name}
      </div>
          <div id="face-size">
            {this.state.product.product_size}
          </div>
          <div id="product-name">
            <h1>Sentry Leather Watch</h1>
          </div>
          <div id="product-color">
            All black
          </div>
          <div id="product-rating">
            stars here ***** 200 ratings
          </div>
          <div id="product-desc">
            <p>Set to Stun. The Sentry Leather is an elegant timepiece with an adventurous side. Think black tie meets block party. The face pops with depth and detail, but with the solid stainless steel case, hardened mineral crystal, and waterproof rating of 100m, you don't have to worry about it not being able to hang in the real world.</p>
          </div>
          <div id="btn360">
            <button type="submit" > View in 360</button>
          </div>
          <div id="product-gallery">
            <ul>
              <li class="product-gallery-image"><img class="disp-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb1"/></li>
              <li class="product-gallery-image"><img class="disp-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb2"/></li>
              <li class="product-gallery-image"><img class="disp-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb3"/></li>
              <li class="product-gallery-image"><img class="disp-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb4"/></li>
            </ul>
          </div>
        </div>


      </div>
      <div id="image-col2">
      <img src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="main"/>
      </div>

      <div id="select-col3">
        <div id="specs">
          <div id="color">
          Color
          <div id="serial">
            A-105-2019-23
          </div>
           <br /><br /> All Black
          </div>
        </div>
        <div id="color-picker">
          <ul>
              <li class="color-gallery-image"><img class="color-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb1"/></li>
              <li class="color-gallery-image"><img class="color-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb2"/></li>
              <li class="color-gallery-image"><img class="color-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb3"/></li>
              <li class="color-gallery-image"><img class="color-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb4"/></li>
              <li class="color-gallery-image"><img class="color-thumb" src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png" id="thumb4"/></li>
            </ul>
        </div>
        <div id="price-info">
        <h3>$150.00</h3>
        <p id="afterpay">or 4 installments of $37.50 with afterpay</p>
        </div>

      <div id="payment">
      <button id="add-to-cart">
        Add to My Cart
      </button>
      <button id="wl"><i class="far fa-heart"></i></button>
      </div>

      <div id="promo-message">
      <img alt="" class="icon" src="https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dw5113921a/truck-icon.png" title=""></img>
      <p id="promo-text">Free Shipping + Free Returns</p>
      </div>

      <div id="callout"><hr></hr></div>


      </div>
     </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


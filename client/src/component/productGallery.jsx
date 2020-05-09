import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ProductGallery extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedImage: null,
      border: '',
    }
    this.determineStyle = this.determineStyle.bind(this);
    this.getImages = this.getImages.bind(this);
  }

componentDidMount(){
  this.getImages();
}


//to make it restart at 0 index with new color click,
//changekey needs to be called to update in the parent component.

// componentWillReceiveProps(){
//   this.getImages();
//  changeKey(0);
// }

getImages(){
  let starter;
  let serial = this.props.serial
  axios.get(serial)
  .then((response) => {
    starter = response.data.images[0];
    //onsole.log(starter, 'starter');
    this.setState({
      selectedImage: 0,
      border: '1px solid black',
    });
  })
  .catch(function(error){
    console.log(error);
  })
}

  determineStyle(index){
    let isItemSelected = this.state.selectedImage == index;
    return isItemSelected ? '1px solid black' : '1px solid lightgrey';
  }

  render(){
    var changeKey = this.props.action;
    return (
      <div>
        <ul>
          {this.props.images ? this.props.images.map((image, index) =>(
            <li className="product-gallery-image">
              <img className="disp-thumb" src={image} key={index}
              onClick={() => {this.setState({selectedImage: index});
              changeKey(index)}}
              style={{border: this.determineStyle(index)}}
              ></img>
            </li>
          )) : "Getting Product Data.."}
        </ul>
      </div>
    )
  }
}

export default ProductGallery;
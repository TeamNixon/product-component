import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import InnerImageZoom from 'react-inner-image-zoom';

class Image extends React.Component {
  constructor(props){
    super(props);

    this.state={
      mainImage: 'https://media.complex.com/campaigns/2014-q4/nixon-spectrum/mobile/nixon_cover.jpg',
      key: this.props.currentKey,
      serial: null,

    }
    this.setMainImage = this.setMainImage.bind(this);

  };

componentDidMount(){
  this.setMainImage();
}
//receives the new current key from props changed by product gallery component
componentWillReceiveProps({currentKey}){
  let newKey = currentKey;
  let newImage;
  let serial = this.props.serial
  axios.get(serial)
  .then((response) => {
    newImage= response.data.images[newKey];
    this.setState({
      mainImage: newImage,
    });
  })
  .catch(function(error){
    console.log(error);
  })
}

//sets the main image to be the 0th index at start
setMainImage() {
  let image = this.props.currentKey;
  axios.get('A105-2687-00')
  .then((response) => {
    let starter= response.data.images[0];
    this.setState({
      mainImage: starter,
    });
  })
  .catch(function(error){
    console.log(error);
  })
}



render(){
  return(
    <div>
      <InnerImageZoom id="main" src={this.state.mainImage} />
    </div>
    );
}


}


export default Image;
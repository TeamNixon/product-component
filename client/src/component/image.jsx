import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import InnerImageZoom from 'react-inner-image-zoom';

class Image extends React.Component {
  constructor(props){
    super(props);

    this.state={
      mainImage: 'https://media.complex.com/campaigns/2014-q4/nixon-spectrum/mobile/nixon_cover.jpg',
      key: 0,

    }
    this.setMainImage = this.setMainImage.bind(this);

  };

componentDidMount(){
  this._isMounted = true;
  this.setMainImage();
}

setMainImage() {
  let starter;
  axios.get('A105-2687-00')
  .then((response) => {
    starter= response.data.images[0];
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
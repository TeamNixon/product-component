import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import InnerImageZoom from 'react-inner-image-zoom';

class Image extends React.Component {
  constructor(props){
    super(props);

    this.state={
      mainImage: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw1637bf42/products/A1210-2930-view1.jpg?sfrm=png",
    }
    this.setMainImage = this.setMainImage.bind(this);

  };

ComponentDidMount(){
  console.log("component mounted")
  setMainImage();
}

setMainImage() {
  console.log("main image setting with", this.props);
  let defaultImage = [];
  for(let i =0; i<props.length; i++){
    defaultImage.push(this.props.images[i]);
  }
   this.setState({
     mainImage: defaultImage[0],
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
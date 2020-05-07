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
componentWillMount(){
  if(this.props){
  let items = this.props.images;
  let starter = items;
}
}
componentDidMount(){
  this.getImages();
}

getImages(){
  let starter;
  axios.get('A105-2687-00')
  .then((response) => {
    starter = response.data.images[0];
    //onsole.log(starter, 'starter');
    this.setState({
      selectedImage: 0,
      border: '1px solid lightblue',
    });
  })
  .catch(function(error){
    console.log(error);
  })
}

  determineStyle(index){
    let isItemSelected = this.state.selectedImage === index;
    return isItemSelected ? '1px solid lightblue' : '';
  }

  render(){
    return (
      <div>
        <ul>
          {this.props.images ? this.props.images.map((image, index) =>(
            <li className="product-gallery-image">
              <img className="disp-thumb" src={image} key={index} onClick={()=> this.setState({selectedImage: index})}
               style={{border: this.determineStyle(index)}}></img>
            </li>
          )) : "Getting Product Data.."}
        </ul>
      </div>
    )
  }
}

export default ProductGallery;
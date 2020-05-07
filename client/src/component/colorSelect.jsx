import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class ColorSelect extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedImage: 0,
      border: '1px solid lightblue',
    }
    this.determineStyle = this.determineStyle.bind(this);
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
  return(
    <ul>
      {this.props.images ? this.props.images.map((image, index) =>(
        <li className="color-gallery-image"><img className="color-thumb"
        src={image} key={index}
        onClick={()=> this.setState({selectedImage: index})}
        style={{border: this.determineStyle(index)}}
        /></li>
      )) : 'Getting Data'}

    </ul>
  )

}


}

export default ColorSelect;
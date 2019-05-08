import React, { Component } from 'react'
import {connect} from 'react-redux';
import ImageList from '../ImageList'

export class Favorites extends Component {

  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Favorites</h1>
       <ImageList pathName={this.props.location.pathname} images={this.props.images}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {images: state.giphs.favorites}
}

export default connect(mapStateToProps)(Favorites)

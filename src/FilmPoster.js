import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {
    
    return (
      <img src={this.props.posterPath} alt=""/>
    )
  }
}

export default FilmPoster;


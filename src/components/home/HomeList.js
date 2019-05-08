import React, { Component } from "react";
import {connect} from 'react-redux';
import {getTrending} from '../../actions';
import ImageList from '../ImageList';

class HomeList extends Component {

    componentDidMount(){
        this.props.getTrending()
    }

    render() {
        return (
            <ImageList images={this.props.images}/>
        );
    }
}

const mapStateToProps = (state) => {
    return{images: state.giphs.giphs}
}

export default connect(mapStateToProps, {
    getTrending,
} )(HomeList);
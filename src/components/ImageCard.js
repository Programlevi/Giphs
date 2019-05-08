import React from 'react';
import styles from './ImageCard.module.css'
import { addFavorite } from '../actions';
import { connect } from 'react-redux';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef()
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans })
    }

    componentWillUnmount() {
        this.imageRef.current.removeEventListener('load', this.setSpans)
    }

    onImageClick = () => {
        this.props.addFavorite(this.props.image);
    }

    render() {
        return (
            <div className={styles.card} style={{ gridRowEnd: `span ${this.state.spans}` }} onClick={this.props.pathName !== "/favorites" ? this.onImageClick : null}>
                {
                    this.props.pathName !== "/favorites" ? <div className={styles.text}>Add to favorites</div> : null
                }
                <img ref={this.imageRef} src={this.props.image.images.downsized_medium.url} alt={this.props.image.type} />
            </div >
        )
    }
}


export default connect(null, {
    addFavorite
})(ImageCard)
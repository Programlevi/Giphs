import React, { Component } from "react";
import styles from "./ImageList.module.css";
import ImageCard from "./ImageCard";

class ImageList extends Component {

    renderImages = () => {
        return this.props.images.map((image) => <ImageCard pathName={this.props.pathName} image={image} key={image.id}/>)
    }

    render() {

        if(this.props.images.length === 0){
           return <h1 className={styles.animate}>Loading...</h1>
        }

        return (
            <div className={styles.imageContainer}>
                {this.renderImages()}
            </div>
        )
    }
}

export default ImageList;
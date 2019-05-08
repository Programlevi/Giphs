import React, { Component } from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import {getSearch} from '../../actions';
import {fetchInput} from '../../actions';


class SearchBar extends Component {
    
    onFormSubmit = (event) => {
        event.preventDefault();
        if(this.props.searchTerm){
            this.props.getSearch(this.props.searchTerm)
        }
    }

    onInputChange = (event) => {
        this.props.fetchInput(event.target.value)
    }

    render() {
        return (
            <form className={styles.form} onSubmit={this.onFormSubmit} autoComplete="off">
                <div className={styles.container}>
                    <input type="text" id="filter" placeholder="Search gifs..." value={this.props.searchTerm} className={styles.formInput} onChange={this.onInputChange}/>
                    <button className={styles.formButton}>Search</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {searchTerm: state.searchTerm}
}

export default connect(mapStateToProps, {
 getSearch,
 fetchInput
})(SearchBar)

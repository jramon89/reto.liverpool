import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeComponent from '../../components/Home/Home'
import PostsList from '../../components/Posts/Posts';


import { fetchProducts, fetchDeleteProduct } from '../../actions/productsActions';

@connect(state=>({
    posts: state.initialData,
    products: state.products,
}))

class Home extends Component {
    static propTypes = {};

    constructor(props){
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchProducts());
    }

    render() {
        const {
            products
        } = this.props;
        return(
            <div>
               <HomeComponent
                   data={ products.items }
                   deleteProduct={ this.deleteProduct }/>
            </div>
        );
    }

    deleteProduct(id) {
        const { dispatch } = this.props;
        dispatch(fetchDeleteProduct(id));
    }
}

export default Home;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewProduct from '../../components/NewProduct/NewProduct';
import { fetchAddProducts, fetchUpdateProduct } from "../../actions/productsActions";

@connect(state=>({
    posts: state.initialData,
    products: state.products,
}))

class AddProduct extends Component {
    static propTypes = {};

    constructor(props){
        super(props);
        this.addProduct = this.addProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }


    render() {
        const { match, products, history } = this.props;
        return(
            <div>
                <NewProduct
                    history={ history }
                    data={ products.items }
                    dispatch={ this.props.dispatch }
                    addProduct={ this.addProduct }
                    updateProduct={ this.updateProduct }
                    id={ match.params.id }/>
            </div>
        );
    }

    addProduct(name, price, image, id_prod) {
        const { dispatch, history } = this.props;
        dispatch(fetchAddProducts({
            name,
            price,
            image,
            id_prod
        }));
        history.push('/');
    }

    updateProduct(name, price, image, id) {
        const { dispatch, history } = this.props;
        dispatch(fetchUpdateProduct({ data: {
            name,
            price,
            image
        }, id,}));
        history.push('/');
    }
}

export default AddProduct;
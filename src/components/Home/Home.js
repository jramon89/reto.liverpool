import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Home extends Component {
    static propTypes = {
        data: PropTypes.any,
        deleteProduct: PropTypes.func
    };

    constructor(props){
        super(props);
    }

    render() {
        const {
            data,
            deleteProduct
        } = this.props;

        const list = data.map((val, index) => {
            return (
                <div className="products-list" key={index}>
                    <div className="product-item">
                        { val.name }
                    </div>
                    <div className="product-item">
                        ${ val.price }.00
                    </div>
                    <div className="product-item">
                        <img src={ val.image } alt="" width="40%"/>
                    </div>
                    <div className="product-item">
                        <a href="#" onClick={() => deleteProduct({ id: val.id_prod }) }>Eliminar</a>
                    </div>
                    <div className="product-item">
                        <Link to={`/editar/${index+1}`}>Actualizar</Link>
                    </div>
                </div>
            );
        });
        return(
            <div className="products-content">
                <div className="products-list">
                    <div className="product-item">
                        <strong>Nombre</strong>
                    </div>
                    <div className="product-item">
                        <strong>Precio</strong>
                    </div>
                    <div className="product-item">
                        <strong>Referencia</strong>
                    </div>
                    <div className="product-item">
                        <strong></strong>
                    </div>
                    <div className="product-item">
                        <strong></strong>
                    </div>
                </div>
                <br/>
                { list }
            </div>
        );
    }
}

export default Home;
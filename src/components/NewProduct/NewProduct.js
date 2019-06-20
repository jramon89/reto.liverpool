import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {hideLayoutElements} from "../../actions/actionsLayout";
class NewProduct extends Component {
    static propTypes = {
        data: PropTypes.any,
        dispatch: PropTypes.func,
        addProduct: PropTypes.func,
        updateProduct: PropTypes.func,
        id: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        history: PropTypes.object
    };

    constructor(props){
        super(props);

        this.state = {
            name: '',
            price: '',
            image: '',
            values: {
                name: props.id ? props.data[props.id-1].name: '',
                price: props.id ? props.data[props.id-1].price : '',
                image: props.id ? props.data[props.id-1].image : ''
            }
        };
        this.addProduct = this.addProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFile = this.handleChangeFile.bind(this);
        this.values = {};
        this.image = props.id ? props.data[props.id-1].image : null;
    }

    handleChange(element) {
        this.values[element] = this.refs[element].value;
        this.setState({
            values: this.values
        });

    }

    handleChangeFile(e) {

        const input = e.target;
        const reader = new  FileReader();
        const load = this.refs.load;
        const self = this;
        reader.onload = function () {
            const dataURL = reader.result;
            const output = load;
            output.src = dataURL;
            self.image = dataURL;
        };

        reader.readAsDataURL(input.files[0]);

    }
    render() {
        const {
            data,
            id,
        } = this.props;

        return(
            <div className="form-products">
                <form action="#" onSubmit={ this.addProduct }>
                    <input type="text" placeholder="Nombre" value={ this.state.values.name } id="name" ref="name" required onChange={ () => this.handleChange('name') }/>
                    <input type="number"  placeholder="Precio" value={ this.state.values.price } id="price" ref="price" required onChange={ () => this.handleChange('price') }/>
                    <input type="file"  id="image" ref="image" onChange={ (e)  => this.handleChangeFile(e) }/>
                    <img src={ this.image } alt="" ref="load" width="25px"/>
                    <button>
                        Guardar
                    </button>
                </form>
            </div>
        );
    }

    addProduct(e) {
        const {
            addProduct,
            updateProduct,
            id,
            data,
            history
        } = this.props;

        e.preventDefault();

        const {
            name,
            price,
        } = this.refs;
        if (id) {
            const id_prod = data[id-1].id_prod;
            updateProduct(name.value, price.value, this.image, id_prod);
            return;
        }

        addProduct(name.value, price.value, this.image, data.length+1);


    }
}

export default NewProduct;
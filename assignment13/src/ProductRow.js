import React, { Component } from 'react'

class ProductRow extends Component {
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
        this.update =this.update.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            name: '',
            price: '',
            id: '',
            cat: '',
            instock: ''
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});    
    }

    componentDidMount() {
        this.setState({
            name: this.props.product.name,
            price: this.props.product.price,
            id: this.props.product.productid,
            cat: this.props.product.category,
            instock: this.props.product.instock
        })
    }

    destroy() {
        this.props.onDestroy(this.props.product.productid);
    }
    update() {
        const productToUpdate = {
            name: this.state.name,
            price: this.state.price,
            productid: this.state.id,
            category: this.state.cat,
            instock: this.state.instock
        };
        this.props.onUpdate(productToUpdate);
    }
    render () {
        return (
            <tr>
                <td><input name='name' value={this.state.name} type='text' onChange={this.handleChange}/></td>
                <td><input name='cat' value={this.state.cat} type='text' onChange={this.handleChange}/></td>
                <td><input name='price' value={this.state.price} type='text' onChange={this.handleChange}/></td>
                <td><input name='instock' value={this.state.instock} type='text' onChange={this.handleChange}/></td>
                <td className="text-right">
                    <button onClick={this.update} className="btn btn-info">Update</button>
                </td>
                <td className="text-right">
                    <button onClick={this.destroy} className="btn btn-info">Delete</button>
                </td> 
            </tr>
        )
    }
}

export default ProductRow
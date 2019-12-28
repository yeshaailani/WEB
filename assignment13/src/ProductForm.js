import React, { Component } from 'react'

const RESET_VALUES = {productid: '', category: '', price: '', name: ''}

class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.state = {
            product: Object.assign({}, RESET_VALUES),
            errors: {},
        }
    }
   
    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
        })
    }
    handleSave(e) {
        e.preventDefault()
        this.props.onSave(this.state.product);
        this.setState({
            product: Object.assign({}, RESET_VALUES), 
            errors: {}
        })
    }

    render () {
        return (
            <form>
                <h4>Add a new product</h4>
                <p>
                    <label>Name: <br/> 
                    <input type="text" className="form-control" name="name" onChange={this.handleChange} value={this.state.product.name} /></label>
                </p>
                <p>
                    <label>Category: <br/> 
                    <input type="text" className="form-control" name="category" onChange={this.handleChange} value={this.state.product.category} /></label>
                </p>
                <p>
                    <label>Price: <br/> 
                    <input type="text" className="form-control" name="price" onChange={this.handleChange} value={this.state.product.price} /></label>
                </p>
                <p>
                    <label>In stock</label>
                    <input type="text" className="form-control" name="instock" onChange={this.handleChange} placeholder='Enter true or false!' value={this.state.product.instock} />
                </p>

                <input type="submit" className="btn btn-info" value="Save" onClick={this.handleSave}></input>
            </form>
        )
    }
}

export default ProductForm
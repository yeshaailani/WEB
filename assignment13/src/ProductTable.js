import React, { Component } from 'react'
import ProductRow from './ProductRow'

class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleDestroy(id) {
        this.props.onDestroy(id)
    }
    handleUpdate(id) {
        this.props.onUpdate(id)
    }   
    render () {
        let productsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid])
        let rows = []

        productsArray.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1) {
                return
            }
            rows.push (
                <ProductRow 
                    product={product} 
                    key={product.productid} 
                    onDestroy={this.handleDestroy}
                   onUpdate={this.handleUpdate}>
                </ProductRow>
            )
        })
        return (
            <div>
                <table className="table table-striped table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable
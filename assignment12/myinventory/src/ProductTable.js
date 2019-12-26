import React, { Component } from 'react'
import ProductRow from "./ProductRow";


class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleDestroy(id) {
        this.props.onDestroy(id)
    }
}

export default ProductTable;
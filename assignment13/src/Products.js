import React, { Component } from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'
 

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            products: {}
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    //get method
    componentDidMount() {this.getDetails()}
    getDetails(){
        fetch('/product/get/')
        .then((data) => data.json())
        .then((data) => {
            this.setState({
                products:data
            })
        });
    } //get method end

    handleFilter(filterInput) {
        this.setState(filterInput)
    }

    handleSave(product) {
        product.productid = new Date().getTime()
        this.setState((prevState) => {
            let products = prevState.products
            products[product.productid] = product
            return { products }
        })

        var data = {'product' : product, 'id': product.productid}
        fetch('/product/create',{
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                Accept: 'application/json',
                        'Content-Type': 'application/json',
            },
            
        }).then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    handleDestroy(productId) {

        this.setState((prevState) => {
            let products = prevState.products
            delete products[productId]
            return { products }
        });

        const url = '/product/delete/'+productId+'/';

        fetch(url,{
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                        'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    handleUpdate(updatedToProduct) {
        var data = {'product' : updatedToProduct, 'id': updatedToProduct.productid};
        const url = '/product/update/'+updatedToProduct.productid+'/';
        fetch(url,{
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                        'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            this.getDetails();
            alert('Product successfully updated');
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render () {
        return (
            <div>
                <h1>My Inventory</h1>
                <Filters 
                    onFilter={this.handleFilter}></Filters>
                <ProductTable 
                    products={this.state.products}
                    filterText={this.state.filterText}
                    onDestroy={this.handleDestroy}
                    onUpdate={this.handleUpdate} >
                </ProductTable>
                <ProductForm
                    onUpdate={this.handleUpdate}
                    onSave={this.handleSave}>
                    </ProductForm>
            </div>
        )
    }
}

export default Products
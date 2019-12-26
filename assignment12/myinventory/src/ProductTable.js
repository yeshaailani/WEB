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


render()
{
    var products = this.props.products;
    var filterText = this.props.filterText; 
       
        return(
            <div>
                <table class="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Category
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {Object.keys(products).filter(
                                    key => products[key].name.indexOf(filterText) >= 0
                                )
                                .map( key => {
                                    return (
                                        <ProductRow 
                                            key = {products[key].id} 
                                            product = {products[key]} 
                                            onDestroy={this.handleDestroy} 
                                        >
                                        </ProductRow>
                                    )
                                }
                            )
                        }



                    </tbody>
                </table>



            </div>

        ) //end of return

} //end of render
}

export default ProductTable;
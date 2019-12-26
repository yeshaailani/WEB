import React, {Component} from 'react';
import './App.css';

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {
  constructor(props) {

  super(props); 
  this.state = {
      product: Object.assign({}, RESET_VALUES), errors: {}
    } 

    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e) {
      
      const target = e.target
      const propvalue = target.value
      const name = target.name
      this.setState((prevState) => {
          prevState.product[name] = propvalue
          return { product: prevState.product }
      })
  }

  handleSave(e) {
    this.props.onSave(this.state.product)
    this.setState({
        product: Object.assign({}, RESET_VALUES), errors: {}
    })
    e.preventDefault(); //Prevent form from triggering HTTP POST
}

  render() {
    return (
        <div class="col-md-4">
        <h1>Add a new product</h1>
        <form onSubmit={this.handleSave}>
            <label> Name:
            <br/>
                <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.product.name}/><br />
            </label>
            <br/>
            <label> Category:
            <br/>
                <input type="text" name="category" placeholder="Category" onChange={this.handleChange} value={this.state.product.category}/>
            </label>
            <br />
            <label> Price:
            <br/>
                <input type="text" name="price" placeholder="Price" onChange={this.handleChange} value={this.state.product.price}/><br />
            </label>
            <br/>
            <input type="submit" class="btn btn-primary" value="save"/>
        </form>
    </div>
    );
  }
}
export default ProductForm;
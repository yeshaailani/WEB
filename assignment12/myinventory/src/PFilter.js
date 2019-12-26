import React, {Component} from 'react';


class PFilter extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.props.onFilter({
            [name]: value
        });
    }


    render() {
      return ( 
        <div class="col-md-5">
                <label>
                    <input type="text" name="filterText" placeholder="Search" onChange={this.handleChange}/><br />
                </label>
        </div>
        )
    }
}

export default PFilter;
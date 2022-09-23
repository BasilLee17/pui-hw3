import React, { Component } from 'react';
import './home.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="roll">
              <img className="roll-img" src={this.props.imageURL} alt={this.props.title} />
              <h2>{this.props.title}</h2>
              <div className="choices">
                <p>Glazing:</p>
                <select id="original-glaze" name="glazes" className="glazes">
                  <option value="Keep original">Keep original</option>
                  <option value="Sugar milk">Sugar milk</option>
                  <option value="Vanilla milk">Vanilla milk</option>
                  <option value="Double chocolate">Double chocolate</option>
                </select>
                <p>Pack Size:</p>
                {/*Radio button style is from https://codepen.io/w3programmings/pen/zzRKpy */}
                <div className="sizes">
                  <input type="radio" id={this.props.packOne} defaultValue={1} name={this.props.type} defaultChecked="checked" />
                  <label htmlFor={this.props.packOne}>1</label>
                  <input type="radio" id={this.props.packThree} defaultValue={3} name={this.props.type} />
                  <label htmlFor={this.props.packThree}>3</label>
                  <input type="radio" id={this.props.packSix} defaultValue={6} name={this.props.type} />
                  <label htmlFor={this.props.packSix}>6</label>
                  <input type="radio" id={this.props.packTwelve} defaultValue={12} name={this.props.type} />
                  <label htmlFor={this.props.packTwelve}>12</label>
                </div>
                <h3 id="original-price">$ 2.49</h3>
                <button type="button">
                  Add to Cart
                </button>
              </div>
            </div>
        )
    }
}

export default Product
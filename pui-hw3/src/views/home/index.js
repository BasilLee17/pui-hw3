import './home.css';
import logo from './assets/logo-01.svg';
import original from './assets/original-cinnamon-roll.jpg';
import apple from './assets/apple-cinnamon-roll.jpg';
import raisin from './assets/raisin-cinnamon-roll.jpg';
import walnut from './assets/walnut-cinnamon-roll.jpg';
import chocolate from './assets/double-chocolate-cinnamon-roll.jpg';
import strawberry from './assets/strawberry-cinnamon-roll.jpg';

function Home() {
    return (
        <>
          <meta charSet="UTF-8" />
          <title>Page Title</title>
          <link rel="stylesheet" href="css/style.css" />
          {/*Page Header w/ logo and nav bar*/}
          <div id="top-bar">
            <div id="top-bar-left">
              <img
                id="logo-img"
                src={logo}
                alt="Bun Bun Bake Shop logo"
              />
            </div>
            <div id="top-bar-right">
              <nav>
                <br />
                <br />
                <button id="products">PRODUCTS</button>
                <div className="dropdown">
                  <button className="dropbtn">CART</button>
                  <div className="dropdown-content">
                    <p id="cart-dropdown" />
                  </div>
                </div>
                <br />
                <br />
                <br />
              </nav>
              <hr />
              <br />
              <br />
              <br />
              <br />
              <h1>Our hand-made cinnamon rolls</h1>
            </div>
          </div>
          <br />
          <br />
          {/*Products offerred by Bun Bun Shop*/}
          <div className="options">
            {/*Original Cinnamon Roll*/}
            <div className="roll">
              <img
                className="roll-img"
                src={original}
                alt="Original Cinnamon Roll"
              />
              <h2>Original cinnamon roll</h2>
              <div className="choices">
                <p>Glazing:</p>
                <select
                  id="original-glaze"
                  name="glazes"
                  className="glazes"
                  onchange="updatePrice('original-glaze', 'original', 'original-price')"
                >
                  <option value="Keep original">Keep original</option>
                  <option value="Sugar milk">Sugar milk</option>
                  <option value="Vanilla milk">Vanilla milk</option>
                  <option value="Double chocolate">Double chocolate</option>
                </select>
                <p>Pack Size:</p>
                {/*Radio button style is from https://codepen.io/w3programmings/pen/zzRKpy */}
                <div
                  className="sizes"
                  onchange="updatePrice('original-glaze', 'original', 'original-price')"
                >
                  <input
                    type="radio"
                    id="1-or"
                    defaultValue={1}
                    name="original"
                    defaultChecked="checked"
                  />
                  <label htmlFor="1-or">1</label>
                  <input type="radio" id="3-or" defaultValue={3} name="original" />
                  <label htmlFor="3-or">3</label>
                  <input type="radio" id="6-or" defaultValue={6} name="original" />
                  <label htmlFor="6-or">6</label>
                  <input type="radio" id="12-or" defaultValue={12} name="original" />
                  <label htmlFor="12-or">12</label>
                </div>
                <h3 id="original-price">$ 2.49</h3>
                <button type="button" onclick="addToCart('original-glaze', 'original')">
                  Add to Cart
                </button>
              </div>
            </div>
            {/*Apple Cinnamon Roll*/}
            <div className="roll">
              <img
                className="roll-img"
                src={apple}
                alt="Apple Cinnamon Roll"
              />
              <h2>Apple cinnamon roll</h2>
              <div className="choices">
                <p>Glazing:</p>
                <select
                  id="apple-glaze"
                  name="glazes"
                  className="glazes"
                  onchange="updatePrice('apple-glaze', 'apple', 'apple-price')"
                >
                  <option value="Keep original">Keep original</option>
                  <option value="Sugar milk">Sugar milk</option>
                  <option value="Vanilla milk">Vanilla milk</option>
                  <option value="Double chocolate">Double chocolate</option>
                </select>
                <p>Pack Size:</p>
                {/*Radio button style is from https://codepen.io/w3programmings/pen/zzRKpy */}
                <div
                  className="sizes"
                  onchange="updatePrice('apple-glaze', 'apple', 'apple-price')"
                >
                  <input
                    type="radio"
                    id="1-ap"
                    defaultValue={1}
                    name="apple"
                    defaultChecked="checked"
                  />
                  <label htmlFor="1-ap">1</label>
                  <input type="radio" id="3-ap" defaultValue={3} name="apple" />
                  <label htmlFor="3-ap">3</label>
                  <input type="radio" id="6-ap" defaultValue={6} name="apple" />
                  <label htmlFor="6-ap">6</label>
                  <input type="radio" id="12-ap" defaultValue={12} name="apple" />
                  <label htmlFor="12-ap">12</label>
                </div>
                <h3 id="apple-price">$ 3.49</h3>
                <button type="button" onclick="addToCart('apple-glaze', 'apple')">
                  Add to Cart
                </button>
              </div>
            </div>
            {/*Raisin Cinnamon Roll*/}
            <div className="roll">
              <img
                className="roll-img"
                src={raisin}
                alt="Raisin Cinnamon Roll"
              />
              <h2>Raisin cinnamon roll</h2>
              <div className="choices">
                <p>Glazing:</p>
                <select
                  id="raisin-glaze"
                  name="glazes"
                  className="glazes"
                  onchange="updatePrice('raisin-glaze', 'raisin', 'raisin-price')"
                >
                  <option value="Keep original">Keep original</option>
                  <option value="Sugar milk">Sugar milk</option>
                  <option value="Vanilla milk">Vanilla milk</option>
                  <option value="Double chocolate">Double chocolate</option>
                </select>
                <p>Pack Size:</p>
                {/*Radio button style is from https://codepen.io/w3programmings/pen/zzRKpy */}
                <div
                  className="sizes"
                  onchange="updatePrice('raisin-glaze', 'raisin', 'raisin-price')"
                >
                  <input
                    type="radio"
                    id="1-ra"
                    defaultValue={1}
                    name="raisin"
                    defaultChecked="checked"
                  />
                  <label htmlFor="1-ra">1</label>
                  <input type="radio" id="3-ra" defaultValue={3} name="raisin" />
                  <label htmlFor="3-ra">3</label>
                  <input type="radio" id="6-ra" defaultValue={6} name="raisin" />
                  <label htmlFor="6-ra">6</label>
                  <input type="radio" id="12-ra" defaultValue={12} name="raisin" />
                  <label htmlFor="12-ra">12</label>
                </div>
                <h3 id="raisin-price">$ 2.99</h3>
                <button type="button" onclick="addToCart('raisin-glaze', 'raisin')">
                  Add to Cart
                </button>
              </div>
            </div>
            {/*Walnut Cinnamon Roll*/}
            <div className="roll">
              <img
                className="roll-img"
                src={walnut}
                alt="Walnut Cinnamon Roll"
              />
              <h2>Walnut cinnamon roll</h2>
              <div className="choices">
                <p>Glazing:</p>
                <select
                  id="walnut-glaze"
                  name="glazes"
                  className="glazes"
                  onchange="updatePrice('walnut-glaze', 'walnut', 'walnut-price')"
                >
                  <option value="Keep original">Keep original</option>
                  <option value="Sugar milk">Sugar milk</option>
                  <option value="Vanilla milk">Vanilla milk</option>
                  <option value="Double chocolate">Double chocolate</option>
                </select>
                <p>Pack Size:</p>
                {/*Radio button style is from https://codepen.io/w3programmings/pen/zzRKpy */}
                <div
                  className="sizes"
                  onchange="updatePrice('walnut-glaze', 'walnut', 'walnut-price')"
                >
                  <input
                    type="radio"
                    id="1-wa"
                    defaultValue={1}
                    name="walnut"
                    defaultChecked="checked"
                  />
                  <label htmlFor="1-wa">1</label>
                  <input type="radio" id="3-wa" defaultValue={3} name="walnut" />
                  <label htmlFor="3-wa">3</label>
                  <input type="radio" id="6-wa" defaultValue={6} name="walnut" />
                  <label htmlFor="6-wa">6</label>
                  <input type="radio" id="12-wa" defaultValue={12} name="walnut" />
                  <label htmlFor="12-wa">12</label>
                </div>
                <h3 id="walnut-price">$ 3.49</h3>
                <button type="button" onclick="addToCart('walnut-glaze', 'walnut')">
                  Add to Cart
                </button>
              </div>
            </div>
            {/*Double Chocolate Cinnamon Roll*/}
            <div className="roll">
              <img
                className="roll-img"
                src={chocolate}
                alt="Double Chocolate Cinnamon Roll"
              />
              <h2>Double-chocolate cinnamon roll</h2>
              <div className="choices">
                <p>Glazing:</p>
                <select
                  id="chocolate-glaze"
                  name="glazes"
                  className="glazes"
                  onchange="updatePrice('chocolate-glaze', 'chocolate', 'chocolate-price')"
                >
                  <option value="Keep original">Keep original</option>
                  <option value="Sugar milk">Sugar milk</option>
                  <option value="Vanilla milk">Vanilla milk</option>
                  <option value="Double chocolate">Double chocolate</option>
                </select>
                <p>Pack Size:</p>
                {/*Radio button style is from https://codepen.io/w3programmings/pen/zzRKpy */}
                <div
                  className="sizes"
                  onchange="updatePrice('chocolate-glaze', 'chocolate', 'chocolate-price')"
                >
                  <input
                    type="radio"
                    id="1-ch"
                    defaultValue={1}
                    name="chocolate"
                    defaultChecked="checked"
                  />
                  <label htmlFor="1-ch">1</label>
                  <input type="radio" id="3-ch" defaultValue={3} name="chocolate" />
                  <label htmlFor="3-ch">3</label>
                  <input type="radio" id="6-ch" defaultValue={6} name="chocolate" />
                  <label htmlFor="6-ch">6</label>
                  <input type="radio" id="12-ch" defaultValue={12} name="chocolate" />
                  <label htmlFor="12-ch">12</label>
                </div>
                <h3 id="chocolate-price">$ 3.99</h3>
                <button
                  type="button"
                  onclick="addToCart('chocolate-glaze', 'chocolate')"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            {/*Strawberry Cinnamon Roll*/}
            <div className="roll">
              <img
                className="roll-img"
                src={strawberry}
                alt="Strawberry Cinnamon Roll"
              />
              <h2>Strawberry cinnamon roll</h2>
              <div className="choices">
                <p>Glazing:</p>
                <select
                  id="strawberry-glaze"
                  name="glazes"
                  className="glazes"
                  onchange="updatePrice('strawberry-glaze', 'strawberry', 'strawberry-price')"
                >
                  <option value="Keep original">Keep original</option>
                  <option value="Sugar milk">Sugar milk</option>
                  <option value="Vanilla milk">Vanilla milk</option>
                  <option value="Double chocolate">Double chocolate</option>
                </select>
                <p>Pack Size:</p>
                {/*Radio button style is from https://codepen.io/w3programmings/pen/zzRKpy */}
                <div
                  className="sizes"
                  onchange="updatePrice('strawberry-glaze', 'strawberry', 'strawberry-price')"
                >
                  <input
                    type="radio"
                    id="1-st"
                    defaultValue={1}
                    name="strawberry"
                    defaultChecked="checked"
                  />
                  <label htmlFor="1-st">1</label>
                  <input type="radio" id="3-st" defaultValue={3} name="strawberry" />
                  <label htmlFor="3-st">3</label>
                  <input type="radio" id="6-st" defaultValue={6} name="strawberry" />
                  <label htmlFor="6-st">6</label>
                  <input type="radio" id="12-st" defaultValue={12} name="strawberry" />
                  <label htmlFor="12-st">12</label>
                </div>
                <h3 id="strawberry-price">$ 3.99</h3>
                <button
                  type="button"
                  onclick="addToCart('strawberry-glaze', 'strawberry')"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </>
    )
}

export default Home;

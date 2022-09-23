import './home.css';
import logo from './assets/logo-01.svg';
import original from './assets/original-cinnamon-roll.jpg';
import apple from './assets/apple-cinnamon-roll.jpg';
import raisin from './assets/raisin-cinnamon-roll.jpg';
import walnut from './assets/walnut-cinnamon-roll.jpg';
import chocolate from './assets/double-chocolate-cinnamon-roll.jpg';
import strawberry from './assets/strawberry-cinnamon-roll.jpg';
import Product from './Product.js'
import Navigation from './Navigation.js'

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
              <Navigation />
              <hr />
              <h1>Our hand-made cinnamon rolls</h1>
            </div>
          </div>
          {/*Products offerred by Bun Bun Shop*/}
          <div className="options">
            {/*Original Cinnamon Roll*/}
            <Product
                imageURL={original}
                title="Original cinnamon roll"
                type="original"
                packOne="1-or"
                packThree="3-or"
                packSix="6-or"
                packTwelve="12-or"
            />
            {/*Apple Cinnamon Roll*/}
            <Product
                imageURL={apple}
                title="Apple cinnamon roll"
                type="apple"
                packOne="1-ap"
                packThree="3-ap"
                packSix="6-ap"
                packTwelve="12-ap"
            />
            {/*Raisin Cinnamon Roll*/}
            <Product
                imageURL={raisin}
                title="Raisin cinnamon roll"
                type="raisin"
                packOne="1-ra"
                packThree="3-ra"
                packSix="6-ra"
                packTwelve="12-ra"
            />
            {/*Walnut Cinnamon Roll*/}
            <Product
                imageURL={walnut}
                title="Walnut cinnamon roll"
                type="walnut"
                packOne="1-wa"
                packThree="3-wa"
                packSix="6-wa"
                packTwelve="12-wa"
            />
            {/*Double Chocolate Cinnamon Roll*/}
            <Product
                imageURL={chocolate}
                title="Double-chocolate cinnamon roll"
                type="chocolate"
                packOne="1-ch"
                packThree="3-ch"
                packSix="6-ch"
                packTwelve="12-ch"
            />
            {/*Strawberry Cinnamon Roll*/}
            <Product
                imageURL={strawberry}
                title="Strawberry cinnamon roll"
                type="strawberry"
                packOne="1-st"
                packThree="3-st"
                packSix="6-st"
                packTwelve="12-st"
            />
          </div>
        </>
    )
}

export default Home;

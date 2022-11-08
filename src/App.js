import "./App.css";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import {useState} from 'react';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
});

/* ############################################################## */

function App() {
    // TODO: use useState to create a state variable to hold the state of the cart
    // initial cart value as zero
    const [cart, setCart] = useState([]);

    function handleClick(item) {
        setCart([...cart, item]);
    }

    return (
        <div className="App">
            <div className="row">
                <div className="col-sm-7">
                    <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
                    {/* set each line has three columns */}
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {bakeryData.map((item, index) => (
                            <BakeryItem
                                key={index}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                handleClick={handleClick}
                            />
                        ))}
                    </div>
                </div>
                <div className="col-sm-5">
                    <div>
                        <h2>Cart</h2>
                        {/* TODO: render a list of items in the cart */}
                        {/* if the cart is empty, display a text message: Nothing here just yet! */}
                        {/* if the cart is not empty, display a list of items in the cart */}
                        {(cart.length === 0) ? <p>Nothing here just yet!</p> : <div>
                            <ul className="list-group col-sm-10">
                                {cart.map((item, index) => (
                                    <li className="list-group-item" key={index}>
                                        {item.name} - ${item.price}
                                    </li>
                                ))}
                            </ul>
                            {/* show the total price of the items in the cart, keep two decimal places */}
                            <h3>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
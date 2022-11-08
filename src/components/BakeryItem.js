// TODO: create a component that displays a single bakery item
// use card from bootstrap to show the image, description, name, and price, and an add to cart (bootstrap button) button
// data (image, description, name, price) is passed in as props

// modify app.js cart when add to cart button is clicked


export default function BakeryItem(props) {
    return (
        <div className="col-sm-6">
            <div className="card">
                <img src={props.image} className="card-img-top" alt={props.name}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">${props.price}</p>
                    <button className="btn btn-primary" onClick={() => props.handleClick(props)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
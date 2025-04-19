import React from "react";
class CartItem extends React.Component
{
    constructor(props)
    {
        super(props);
        //property variable
        this.name = props.name;
        this.price = props.price;
        this.photo = props.photo;
        //state object
        this.state = {
            quantity: props.quantity,
            itemTotal: parseInt(props.quantity) * parseInt(props.price)
        }
    }
    updateQuantity = (qty) => {
        this.setState({
            quantity:qty
        });
    }
    render()
    {
        return (  <tr>
            <td>{this.name}</td>
            <td>
            <img src={this.photo} 
            className="cart-img" alt="Product 1" />
            </td>
            <td>
                <input type="number" className="form-control quantity-input" value={this.state.quantity} min={1} onchange="updateTotal(this)" 
                onChange={(e) => this.updateQuantity(e.target.value)} />
            </td>
            <td>&#8377; {this.price}</td>
            <td className="item-total">&#8377; {parseInt(this.state.quantity) * parseInt(this.price)}</td>
            <td><button className="btn btn-danger btn-sm" onclick="removeItem(this)">Remove</button></td>
        </tr>
       );
    }
}
export default class Cart extends React.Component {
    render() {
        return (<div className="container my-5">
            <h1 className="mb-4">Shopping Cart</h1>
            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Item Total</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem name='IPhone 16 pro max' price='125000' quantity='1'
                            photo='https://picsum.photos/100?random=1' />
                             <CartItem name='Apple watch' price='85000' quantity='1'
                            photo='https://picsum.photos/100?random=2' />
                            <CartItem name='Macbook pro' price='215000' quantity='2'
                            photo='https://picsum.photos/100?random=3' />
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={4} className="text-end"><strong>Total:</strong></td>
                                <td id="cart-total">&#8377; 110.00</td>
                                <td />
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            
        </div>
        );
    }
}
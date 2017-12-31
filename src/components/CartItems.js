import React, { Component } from 'react';
import * as MessageType from './../constants/Message'
class CartItems extends Component {

    onUpdateQuantity = (product, quantity) => {
        var { onUpdateProductInCart,onChangeMessage } = this.props;
        if (quantity > 0) {            
            onUpdateProductInCart(product, quantity);
            onChangeMessage(MessageType.MSG_UPDATE_CART_SUCCESS)
        }
    }

    onRemove = (product) => {
        var { onRemove, onChangeMessage } = this.props
        onRemove(product)
        onChangeMessage(MessageType.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }
    render() {
        var { item } = this.props;
        var { quantity } = item
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                        >
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{item.quantity * item.product.price}$</td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={() => this.onRemove(item.product)}>
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItems;

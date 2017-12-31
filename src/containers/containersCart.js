import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Cart from './../components/Cart'
import CartItems from './../components/CartItems'
import CartIRsult from './../components/CartResult'
import * as Message from './../constants/Message'
import { actRemove, actChangeMessage, atcUpdateProductInCart } from './../actions/index'

class Cartcontainers extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>{this.showCart(cart)}
                {this.showTotalAmount(cart)}
            </Cart>

        )
    }
    showCart = (cart) => {
        var { onRemove, onChangeMessage ,onUpdateProductInCart} = this.props
        var result = Message.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItems
                    key={index}
                    item={item}
                    index={index}
                    onRemove={onRemove}
                    onChangeMessage={onChangeMessage}
                    onUpdateProductInCart={onUpdateProductInCart}
                />
            })
        }
        return result
    }
    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartIRsult cart={cart} />
        }
        return result;
    }
}

Cartcontainers.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        //    quantity : PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRemove: (product) => {
            dispatch(actRemove(product))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart:(product,quantity)=>{
            dispatch(atcUpdateProductInCart(product,quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cartcontainers);

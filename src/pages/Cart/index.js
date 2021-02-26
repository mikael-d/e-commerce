/* eslint-disable no-restricted-syntax */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row, Col, Container, Button, Table, Image,
} from 'react-bootstrap';

import { ImCross } from 'react-icons/im';
import { updateCart, removeFromCart } from '../../actions/actions';

import './style.scss';

const CartPage = () => (
  <Container className="cart-page">
    <Row>
      <Col md={9}>
        <ItemProduct />
      </Col>
      <Col>
        <OrderSummary />
      </Col>
    </Row>
  </Container>
);

export default CartPage;

const OrderSummary = () => {
  const items = useSelector((state) => state.items);
  // const [subTotal, setSubTotal] = useState();

  const subTotalList = items.map((item) => item.quantity * item.details.price);
  let subTotal = 0;

  for (const total of subTotalList) {
    subTotal += total;
  }
  const shipping = items.length && subTotal > 0 ? 10 : 0;

  return (
    <Container className="order-summary">
      <Container className="order-summary__price">
        <Row className="order-summary--row">Order Summary</Row>
        <Row className="order-summary--row">
          <Container className="order-summary__price__sub-total">
            <Row>
              <Col>Subtotal</Col>
              <Col>
                {subTotal.toFixed(2)}
                €
              </Col>
            </Row>
            <Row>
              <Col>shipping</Col>
              <Col>
                {shipping.toFixed(2)}
                €
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="order-summary--row">
          <Col>Total</Col>
          <Col>
            {(subTotal + shipping).toFixed(2)}
            €
          </Col>
        </Row>
      </Container>
      <Link to="/checkout">
        <Button className="order-summary__button" disable={!!items.length}>
          Checkout
        </Button>
      </Link>
    </Container>
  );
};

const ItemProduct = () => {
  const TableRow = ({ item }) => {
    const dispatch = useDispatch();

    const { quantity, details } = item;

    // modifie la quantité pour un produit donné dans le state global

    const updateItemQuantity = (product, qty) => {
      dispatch(updateCart(product, qty));
    };

    // supprime l'article en question dans le state global
    const removeItemFromCart = (product) => {
      dispatch(removeFromCart(product));
    };

    const [itemQuantity, setItemQuantity] = useState(quantity);

    console.log('itemQuantity initital', itemQuantity);

    return (
      <tr className="table-row">
        <td className="table-row__data">
          <Image src={details.image} fluid width={70} height={70} />
        </td>
        <td className="table-row__data">{details.name}</td>
        <td className="table-row__data">{details.price}</td>
        <td className="table-row__data">
          <div className="modal-counter">
            <button onClick={() => {
              updateItemQuantity(item, quantity > 0 ? itemQuantity - 1 : itemQuantity);
            }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => {
              updateItemQuantity(item, quantity + 1);
            }}
            >
              +
            </button>
          </div>
        </td>
        <td className="table-row__data">
          {(quantity * details.price).toFixed(2)}
        </td>
        <td className="table-row__data">
          <Button>
            <ImCross onClick={() => removeItemFromCart(item)} />
          </Button>
        </td>
      </tr>
    );
  };

  const items = useSelector((state) => state.items);

  return (
    <Table responsive striped borderless hover variant="dark">
      <thead>
        <tr>
          <th>Product</th>
          <th>Reference</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (<TableRow item={item} />))}
      </tbody>
    </Table>
  );
};

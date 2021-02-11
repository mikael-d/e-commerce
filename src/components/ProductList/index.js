/* eslint-disable no-unreachable */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Card, Button, Row, Col, Modal, Container, Image,
} from 'react-bootstrap';

import './style.scss';

const ProductList = ({
  allProducts,
  cartCount,
  setCartCount,
}) => {
  console.log('allProduct', allProducts);

  return (
    <div className="product-list">
      <Row>
        {allProducts
          && allProducts.map((product) => (
            <CardProduct product={product} cartCount={cartCount} setCartCount={setCartCount} />
          ))}

        {!allProducts.length
          && 'dsl aucun produits ne correspond à votre recherche'}
      </Row>
    </div>
  );
};

export default ProductList;

// modal lors du click sur un produit
const ProductModal = ({
  show,
  handleClose,
  product,
  setCount,
  count,
  cartCount,
  setCartCount,
}) => {
  const increaseCount = () => {
    setCount(count >= 1 ? count + 1 : count);
  };

  const decreaseCount = () => {
    setCount(count >= 2 ? count - 1 : count);
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col md={4}>
              <Image src={product.image} fluid />
            </Col>
            <Col md={8}>
              <Row md={4}>
                Lors du développement d’un projet, il arrive souvent de partir
                sur de mauvaises bases en termes d’indentation et de normes de
                code. Pour y remédier, il existe des outils qui permettent de
                palier à ce genre de désagrément.
                {' '}
              </Row>
              <Row md={4}>{`${product.price} € /${product.unit}`}</Row>
              <Row md={4}>
                <div className="modal-counter">
                  <button onClick={() => decreaseCount()}>-</button>
                  <span>{count}</span>
                  <button onClick={() => increaseCount()}>+</button>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => { setCartCount(cartCount + count); }}>Understood</Button>
      </Modal.Footer>
    </Modal>
  );
};

const CardProduct = ({
  product,
  cartCount,
  setCartCount,

}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [count, setCount] = useState(1);

  return (
    <Col sm={4}>
      <Card className="card" fluid>
        <Card.Img
          className="card__image"
          variant="top"
          src={product.image}
          alt={product.name}
          fluid
        />
        <Card.Body className="card__body">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.price}
            euros/
            {product.unit}
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              handleShow();
            }}
          >
            Go somewhere
          </Button>
        </Card.Body>
        <ProductModal
          setCount={setCount}
          count={count}
          product={product}
          show={show}
          handleClose={handleClose}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
      </Card>
    </Col>
  );
};

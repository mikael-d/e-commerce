/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { } from 'react-hook-form';

import {
  Form, Col, Container, Button,
} from 'react-bootstrap';

import './style.scss';

const CheckoutPage = ({ onChangeField, checkout }) => {
//   const { register, handleSubmit } = useForm();

  const [validated, setValidated] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeField(name, value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="checkout">
      <Container>
        <h1>Checkout</h1>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Control
                name="firstName"
                id="firstName"
                value={checkout.firstName}
                className="checkout-form__input"
                placeholder="First name"
                required
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                name="lastName"
                id="lastName"
                value={checkout.lastName}
                required
                className="checkout-form__input"
                placeholder="Last name"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a lastName
              </Form.Control.Feedback>
            </Col>
          </Form.Row>

          <Form.Group>
            <Form.Control
              name="email"
              id="email"
              value={checkout.email}
              className="checkout-form__input"
              type="email"
              placeholder="email"
              required
              minLength={2}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a email and min 2 letter
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              name="adress"
              required
              id="adress"
              value={checkout.adress}
              className="checkout-form__input"
              type="adress"
              placeholder="adress"
              minLength={4}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter an adress min 4 letter
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Row>
            <Col>
              <Form.Control
                name="postalCode"
                id="postalCode"
                value={checkout.postalCode}
                className="checkout-form__input"
                placeholder="postal code"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                name="city"
                id="city"
                value={checkout.city}
                className="checkout-form__input"
                placeholder="city"
                onChange={handleInputChange}
              />
            </Col>
          </Form.Row>
          <Button
            variant="primary"
            className="checkout-form__submit--button"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default CheckoutPage;

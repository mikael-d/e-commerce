/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

// components
import SideMenu from '../../components/SideMenu';
import ProductList from '../../components/ProductList';

const Home = (props) => {
  console.log('productFiltered', props.filteredProducts);
  return (
    <div className="home">
      <Container fluid>
        <Row>
          <SideMenu
            setCategorie={props.setCategorie}
            categorie={props.categorie}
          />
          <Col sm={8}>
            <ProductList
              allProducts={props.isFiltering ? props.filteredProducts : props.list[props.categorie]}
              filteredProduct={props.filteredProduct}
              cartCount={props.cartCount}
              setCartCount={props.setCartCount}
            />
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default Home;

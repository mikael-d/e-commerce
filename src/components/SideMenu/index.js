/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import './style.scss';

import { Col } from 'react-bootstrap';

const SideMenu = ({ setCategorie, categorie }) => {
  const links = ['Fruits', 'Légumes', 'Produits Frais', 'Epicerie', 'Boissons'];

  return (
    <Col sm={4} className="side-menu">
      <ul className="side-menu__list">
        {links.map((link, index) => {
          console.log('index', index);
          return (
            <li
              className={
                index === categorie
                  ? 'side-menu__list__item--active'
                  : 'side-menu__list__item'
              }
              key={link}
              onClick={() => {
                setCategorie(index);
              }}
            >
              {link}
            </li>
          );
        })}
      </ul>

    </Col>
  );
};

export default SideMenu;

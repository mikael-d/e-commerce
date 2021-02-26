export const actions = {
  ADD_TO_CART: 'ADD_TO_CART',
  UPDATE_CART: 'UPDATE_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  SAVE_CART: 'SAVE_CART',
  INPUT_FORM_CHECKOUT_CHANGE: 'INPUT_FORM_CHECKOUT_CHANGE',

};

// actions creators

const uid = () => Math.random().toString(34).slice(2);

export function addToCart(item, quantity) {
  return {
    type: actions.ADD_TO_CART,
    payload: { id: uid(), quantity, details: item },
  };
}

export function updateCart(item, quantity) {
  return {
    type: actions.UPDATE_CART,
    payload: {
      item,
      quantity,
    },
  };
}

export function removeFromCart(item) {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: item,
  };
}

export function saveCart(items) {
  return {
    type: actions.SAVE_CART,
    payload: { items },
  };
}

export const inputFormCheckoutChange = (payload) => ({
  type: actions.INPUT_FORM_CHECKOUT_CHANGE,
  payload,

});

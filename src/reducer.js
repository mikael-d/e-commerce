/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { actions } from './actions/actions';

// const saveToLocalStorage = (object) => {
//   localStorage.setItem('item', JSON.stringify(object));
// };

const initialState = {
  checkout: {
    firstname: '',
    lastName: '',
    email: '',
    adress: '',
    postalCode: '',
    city: '',
  },
  items: [],

};

export default function onlineStoreApp(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items,
          action.payload,
        ],

      };
    case actions.UPDATE_CART:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.item.id) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        }),

      };
    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case actions.INPUT_FORM_CHECKOUT_CHANGE:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          ...action.payload,
        },
      };

    default:
      return {
        ...state,
      };
  }
}

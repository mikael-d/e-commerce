import { connect } from 'react-redux';
import { inputFormCheckoutChange } from '../actions/actions';
// components
import Checkout from '../pages/Checkout';

const mapState = (state) => ({
  items: state.items,
  checkout: state.checkout,
});

const mapDispatch = (dispatch) => ({
  onChangeField: (name, value) => dispatch(inputFormCheckoutChange({ [name]: value })),
});

export default connect(mapState, mapDispatch)(Checkout);

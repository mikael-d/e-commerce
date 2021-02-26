import { connect } from 'react-redux';
// components
import App from '../App';

const mapState = (state) => ({
  items: state.items,
});

const mapDispatch = false;

export default connect(mapState, mapDispatch)(App);

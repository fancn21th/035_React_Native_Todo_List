import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import AddTodo from './AddTodo';
import addTodo from '../../actions/addTodo';

const mapStateToProps = (state, { navigation }) => ({
  navigation,
});

export default withNavigation(connect(mapStateToProps, {
  addTodo,
})(AddTodo));

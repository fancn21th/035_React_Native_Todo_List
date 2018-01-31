import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import addTodo from '../../actions/addTodo';

const mapStateToProps = (state, { navigation }) => ({
  navigation,
});

export default connect(mapStateToProps, {
  addTodo,
})(AddTodo);

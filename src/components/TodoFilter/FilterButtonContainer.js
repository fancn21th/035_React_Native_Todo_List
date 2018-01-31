import { connect } from 'react-redux';
import FilterButton from './FilterButton';

const mapStateToProps = (state, { filter, navigation, children }) => {
  const filterParams =
    navigation.state.params && navigation.state.params.filter ? navigation.state.params.filter : 'all';
  return {
    active: filter === filterParams,
    children,
  };
};

const mapDispatchToProps = (dispatch, { filter, navigation }) => ({
  onClick() {
    navigation.navigate('Todos', { filter });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);

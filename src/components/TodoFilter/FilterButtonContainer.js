import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import FilterButton from './FilterButton';

const mapStateToProps = (state, { filter, navigation, children }) => {
  const filterParams =
    navigation.state.params && navigation.state.params.filter ? navigation.state.params.filter : 'all';
  return {
    active: filter === filterParams,
    children,
    isFirst: filter === 'all',
    isLast: filter === 'completed',
  };
};

const mapDispatchToProps = (dispatch, { filter, navigation }) => ({
  onClick() {
    navigation.navigate('Todos', { filter });
  },
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(FilterButton));

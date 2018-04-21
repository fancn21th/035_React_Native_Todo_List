import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import Navigator from '../../router';
import { addListener } from '../../reducers/nav';

const NavigatorContainer = ({ dispatch, nav }) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
      addListener,
    })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

NavigatorContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps)(NavigatorContainer);

import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'native-base';

const FilterButton = ({ active, children, onClick }) => {
  if (active) {
    return (
      <Button
        active
        onPress={onClick}
      >
        {children}
      </Button>
    );
  }
  return (
    <Button
      onPress={onClick}
    >
      {children}
    </Button>
  );
};

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.shape({}).isRequired,
};

export default FilterButton;

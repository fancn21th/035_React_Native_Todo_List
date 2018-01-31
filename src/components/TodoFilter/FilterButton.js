import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'native-base';

const FilterButton = ({
  isFirst,
  isLast,
  active,
  children,
  onClick,
}) => (
  <Button active={active} first={isFirst} last={isLast} onPress={onClick}>
    {children}
  </Button>
);

FilterButton.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.shape({}).isRequired,
};

export default FilterButton;

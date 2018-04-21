import React from 'react';
import { Text } from 'native-base';
import PropTypes from 'prop-types';

const FetchError = ({ message }) => (
  <Text>Could not fetch todos. {message}</Text>
);

FetchError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FetchError;

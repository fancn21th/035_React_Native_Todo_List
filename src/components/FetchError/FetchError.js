import React from 'react';
import {
  View,
} from 'react-native';
import {
  Text,
  Button,
} from 'native-base';
import PropTypes from 'prop-types';

const FetchError = ({ message, onRetry }) => (
  <View>
    <Text>Could not fetch todos. {message}</Text>
    <Button onPress={onRetry}>Retry</Button>
  </View>
);

FetchError.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default FetchError;

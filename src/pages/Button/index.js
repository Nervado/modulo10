/* eslint-disable react/jsx-props-no-spreading */
import React  from 'react';
import {ActivityIndicator} from 'react-native';

import {Container, Text } from './styles';

import PropTypes from 'prop-types';

export default function Button({children, loading, ...rest}, ref) {
  return (
    <Container {...rest}>
      {loading ? (
            <ActivityIndicator size="small" color="#FFF"/>
          ) : (
              <Text>{children}</Text>
          )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  loading: false,
};


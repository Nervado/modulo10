/* eslint-disable react/jsx-props-no-spreading */
import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
// import {View} from 'react-native';

import {Container, TInput} from './styles';

function Input({style, ...rest}, ref) {
  return (
    <Container styles={style}>
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
};

export default forwardRef(Input);

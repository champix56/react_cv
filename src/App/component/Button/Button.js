import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => (
  <div className={styles.Button} data-testid="Button">
    {props.text}
  </div>
);

Button.propTypes = {text:PropTypes.string};

Button.defaultProps = {text:"defaultName"};

export default Button;

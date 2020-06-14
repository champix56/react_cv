import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputText.module.css';

const InputText = (props) => (
  <input type="text" className={styles.InputText} value={props.value} onChange={props.onchange} data-testid="InputText"/>
);

InputText.propTypes = {value:PropTypes.string,onchange:PropTypes.func };

InputText.defaultProps = {value:"",onchange:function(){}};

export default InputText;

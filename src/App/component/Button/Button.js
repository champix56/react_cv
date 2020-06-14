import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import ReactDOM from 'react-dom';
const Button = (props) => {
  onclick=(evt)=>{
    props.onclick&& props.onclick(evt);
  }
  return (
  <div className={styles.Button} data-testid="Button" onClick={onclick}>
  <div className={styles.content}>
    {props.text}
    </div>
  </div>
);}

Button.propTypes = {text:PropTypes.string,onclick:PropTypes.func};

Button.defaultProps = {text:"defaultName"};

export default Button;

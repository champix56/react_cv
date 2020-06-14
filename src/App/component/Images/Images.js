import React from 'react';
import PropTypes from 'prop-types';
import styles from './Images.module.css';

const Images = (props) => (
  <div className={styles.Images} data-testid="Images">
    {props.images.map((e,i)=><img src={e.url} alt=""/>)}
  </div>
);

Images.propTypes = {images:PropTypes.array};

Images.defaultProps = {images:[]};

export default Images;

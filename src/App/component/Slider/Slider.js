import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.css';

class Slider extends Component {
  constructor(props){
    super(props);
    this.state={checked:props.value};
  }
  toggle=(evt)=>{
      console.log(evt,this);
      this.setState({checked:!this.state.checked});
      this.props.onClick(this.state);
}
  render() {
    return (
       <div className={styles.Slider} data-testid="Slider" onClick={this.toggle}>
          <div className={this.state.checked?styles.containerStateOn:styles.containerStateOff}>On</div>
          <div className={!this.state.checked?styles.containerStateOn:styles.containerStateOff}>Off</div>
      </div>
    );
  }
}

Slider.propTypes = {onClick:PropTypes.func.isRequired,value:PropTypes.bool};

Slider.defaultProps = {value:true};

export default Slider;

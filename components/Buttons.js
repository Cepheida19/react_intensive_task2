import React, { Component } from 'react';
import s from "./Buttons.module.css";

class Buttons extends React.Component {
    render(){
        return (
        <div className={s.buttons}>
          <span><button onClick={this.props.onClick} type={this.props.type} >{this.props.text}</button></span>
        </div>
        )
    }
}
export default Buttons;

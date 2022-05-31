import React, { Component } from 'react';
import s from "./Inputs.module.css";

class Inputs extends React.Component {

    render(){
        return (
            <div className={s.item}>
              <div><label>{this.props.text}
                <div><input onChange={this.props.onHandleChange} type={this.props.type} 
                    placeholder={this.props.placeholder} name={this.props.name}></input></div>
            </label></div>
            </div>
        )
    }
}
export default Inputs;

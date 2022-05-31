import React, { Component } from 'react';
import s from "./Textareas.module.css";

class Textareas extends React.Component {
    render(){
        return (
            <div className={s.item}>
              <div><label>{this.props.text}
                <div><textarea onChange={this.props.onHandleChange} name={this.props.name} type={this.props.type} 
                rows={this.props.rows} cols={this.props.cols} maxLength={this.props.maxlength} placeholder={this.props.placeholder}></textarea></div>
              </label></div>
            </div>
        )
    }
}
export default Textareas;

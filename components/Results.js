import React, { Component } from 'react';
import s from "./Results.module.css";

class Results extends React.Component {
    render(){
        return (
          <div className={s.container}>
            <div className={s.res}>
                <h2>{this.props.name} {this.props.lastname}:</h2>
                <div className={s.items}>
                  <div><span>Дата рождения:</span> {this.props.date}</div>
                  <div><span>Телефон:</span> {this.props.phone}</div>
                  <div><span>Сайт:</span> {this.props.site}</div>
                  <div><span>О себе:</span> {this.props.info}</div>
                  <div><span>Стек технологий:</span> {this.props.stack}</div>
                  <div><span>Описание последнего проекта:</span> {this.props.project}</div>
                </div>
            </div>
          </div>
        )
    }
}
export default Results;
import './App.css';
import React, { Component } from 'react';
import Inputs from './components/Inputs';
import Textareas from './components/Textareas';
import Buttons from './components/Buttons';
import Results from './components/Results';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      dateInfo: "",
      phone: "",
      site: "",
      info: "",
      stack: "",
      project: "",
      flag: false,
      showData: {
        firstNameRes: "", lastNameRes: "", dateInfoRes: "", phoneRes: "", siteRes: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }
handleChange(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
}
handleShow = (e) => {
  e.preventDefault();
  this.flag = true;
  let res = [];
  res = Object.values(this.state);
  res = res.slice(0,8);
  let isEmpty = res.some(x => x === "");
  if (isEmpty){
    alert("Все поля обязательны для заполнения.");
    this.flag = false;
  }

  let isName = this.state.firstName;
  let isLastName = this.state.lastName;
  let resName = /^[A-ZА-Я]/g.test(isName);
  let resLastName = /^[A-ZА-Я]/g.test(isLastName);
  if(!resName || !resLastName){
    alert("Имя и фамилия должны начинаться с заглавной буквы!");
    this.flag = false;
  }

  let isPhone = this.state.phone;
  let resPhone = /^\d+$/g.test(isPhone);
  if(!resPhone){
    alert("Номер телефона должен содержать только цифры!");
    this.flag = false;
  }

  if(this.state.phone.length > 12 || this.state.phone.length < 10){
    alert("Номер телефона должен содержать от 10 до 12 цифр");
    this.flag = false;
  }

  let resSite = /^https:\/\/.+/.test(this.state.site);
  if(!resSite){
    alert("Сайт должен начинаться с https://");
    this.flag = false;
  }

   const {firstName, lastName, dateInfo, phone, site, info, stack, project} = this.state;
  this.setState({
    showData: {
      firstNameRes: firstName, lastNameRes: lastName, dateInfoRes: dateInfo, phoneRes: phone, siteRes: site
    }
  })
}
handleReset = (e) => {
  this.setState({
    firstName: "", lastName: "aaa", dateInfo: "", phone: "",
    site: "", info: "", stack: "", project: ""
  })
}
  render(){
    if(this.flag){
      return(
        <Results name={this.state.firstName} lastname={this.state.lastName} date={this.state.dateInfo} phone={this.state.phone}
        site={this.state.site} info={this.state.info} stack={this.state.stack} project={this.state.project}/>
      )
    } else {
    return (
      <div className='container'>
        <div className='wrap'>
          <div className='no'>text</div>
            <h2>Создание анкеты</h2>
            <form className='form'>

            <Inputs onHandleChange={this.handleChange} name="firstName" value={this.state.firstName} type="text" 
            placeholder="ваше имя" text="Имя:" />

            <Inputs onHandleChange={this.handleChange} name="lastName" value={this.state.lastName} type="text" placeholder="ваша фамилия" text="Фамилия:"/>

            <Inputs onHandleChange={this.handleChange} name="dateInfo" value={this.state.dateInfo} type="date" text="Дата рождения:"/>

            <Inputs onHandleChange={this.handleChange} name="phone" value={this.state.phone} type="tel" text="Телефон:" maxlength="14" placeholder="7777-777-77-77"/>

            <Inputs onHandleChange={this.handleChange} name="site" value={this.state.site} type="url" text="Сайт:" placeholder="https://example.com"/>

            <Textareas onHandleChange={this.handleChange} name="info" value={this.state.info} type="text" text="O себе:" placeholder="расскажите о себе"
              rows="7" cols="39" maxlength="273"/>

            <Textareas onHandleChange={this.handleChange} name="stack" value={this.state.stack} type="text" text="Стек технологий:" 
              placeholder="ваш стек" rows="7" cols="39" maxlength="273"/>

            <Textareas onHandleChange={this.handleChange} name="project" value={this.state.project} type="text" text="Описание последнего проекта:" 
              placeholder="ваш последний проект" rows="7" cols="39" maxlength="273" onClick={this.countFunc}/>

              <Buttons onClick={this.handleShow} type="submit" text="Сохранить"/>

              <Buttons onClick={this.handleReset}  type="reset" text="Отмена"/>

          </form>
        </div>
      </div>
    )
    }
  }
}
export default App;

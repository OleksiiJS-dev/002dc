import React from "react"

// import App from './src/components/App/index' // SRC
import moment from 'moment/moment';

import "./Calendar1.css"

export default class Calendar extends React.Component {
  static defaultProps = {
    date: new Date(),
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',],
    weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',],
    onchange: Function.prototype
  };

  state = {
    date: this.props.date,
    currentDate: new Date(),
    selectedDate: null
  };

  get year(){
    return this.state.date.getFullYear();
  }
  get month(){
    return this.state.date.getMonth();
  }
  get day(){
    return this.state.date.getDate();
  }

  handlePrevMonthButtonClick = () => {
    const date = new Date(this.year, this.month - 1);
    console.log(date);
    this.setState({date});
  };

  handleNextMonthButtonClick = () => {
    const date = new Date(this.year, this.month + 1);
    console.log(date);
    this.setState({date});
  };

  handleSelectChange = () => {
    // const date = new Date(year, month);

    // this.setState({ date });
  };

  handleDayClick = date => {
    console.log(date);
    this.setState({selectedDate:date});

    this.props.onChange(date);
  }


  render() {
    const { years, monthNames, weekDayNames } = this.props

    const monthData = [
      [undefined, undefined, new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), undefined, undefined, undefined],
    ]

    return (
      <div>
        {/* <App /> */}
        <div className="calendar">
          <header>
            <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>
            <select>
              {monthNames.map((name, index) =>
                <option key={name} value={index}>{name}</option>
              )}
            </select>
            <select>
              {years.map((name, index) =>
                <option key={name} value={index}>{name}</option>
              )}
            </select>
            <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
          </header>

          <table>
            <thead>
              <tr>
                {weekDayNames.map(name =>
                  <th key={name}>{name}</th>
                )}
              </tr>
            </thead>

            <tbody>
              {monthData.map((week, index) =>
                <tr key={index} className="week">
                  {week.map((date, index) => date ?
                    <td 
                    key={index} 
                    className="day"
                    onClick={()=> this.handleDayClick(date)}
                    >{date.getDate()}</td>
                    :
                    <td key={index}></td>
                  )}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
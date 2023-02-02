
import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Calendar1 from './components/Calendar1/Calendar1';
import DatePiker from './components/Calendar2';
import { Calender3 } from './components/Calendar3';


function App() {

  // moment.updateLocale('en', { week: { dow: 1 } });
  // const startDay = moment().startOf('month').startOf('week');
  // const endDay = moment().endOf('month').endOf('week')

  // const calendar = [];
  // const day = startDay.clone();

  // while (!day.isAfter(endDay)) {
  //   calendar.push(day.clone());
  //   day.add(1, 'day')
  // }

  // console.log(calendar)
  // window.moment = moment;


  return (
    <div className="app">
      <Routes>
        <Route path='/' element={
          <>
            <Header />
          </>
        } />
        <Route path='/1' element={
          <>
            <Header />
            <Calendar1 />
          </>
        } />
        <Route path='/2' element={
          <>
          <Header />
          <DatePiker/>
          </>
        } />
        <Route path='/3' element={
          <>
          <Header />
          <Calender3 startingDate={new Date} />
          </>
        } />

      </Routes>
    </div>
  );
}

export default App;

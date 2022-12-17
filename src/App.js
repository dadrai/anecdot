import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';

function App() {
  const [ seconds, setSeconds ] = React.useState(10);
  const [ timerActive, setTimerActive ] = React.useState(false);
let a;
let b;
let anecdots =["Что может быть прекрасней утреннего кофе... в обед!",
"Изобретатель дивана после него уже ничего не изобрёл",
"Сегодня утром в 7:46 произошло открытие века... в 8:05 открыто второе веко...",
"- Знаешь, как заинтересовать дурака? - Как? - Завтра расскажу. ",
"Все, что не делается, делается в Китае. ",
"— А пациенты часто умирают у вас в больнице? — Да что вы, только один раз!"]

  React.useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [ seconds, timerActive ]);

 
  return (
    
    <div>
      {seconds
        ? <React.Fragment>
            <button className='red_button' onClick={() => setTimerActive(!timerActive)}>
              {timerActive ? 'stop' : 'start'}
            </button>
            <div> Анекдот через: {seconds}</div>
            
          </React.Fragment>
        : anecdots[a = Math.floor(Math.random() * 6)]
      }
      
    </div>
   
  );
}


export default App;

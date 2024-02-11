import { useState, useEffect, useReducer } from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import Game from './Components/Game';
import Congrates from './Components/Congrates';
import Timer from './Components/Timer';

const intialState = {
  questions: [],
  status: 'loading',
  secondRemaining: 120,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataRecived':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataRecovered':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'tick':
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? 'finished' : state.status,
      };
    case 'restart':
      return {
        ...state,
        secondRemaining: (state.secondRemaining = 120),
      };
    default:
      throw new Error('Action Unkowne');
  }
}

function App() {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.setItem('questions', JSON.stringify(data));
        dispatch({ type: 'dataRecived', payload: data });
      })
      .catch((err) => {
        const questions = JSON.parse(localStorage.getItem('questions'));
        if (questions) {
          dispatch({ type: 'dataRecovered', payload: questions });
        } else {
          dispatch({ type: 'dataFailed' });
        }
      });
  }, []);

  return (
    <div className=" w-screen h-screen bg-gray-900">
      {!start ? (
        <Welcome setStart={setStart}></Welcome>
      ) : !end && state.status !== 'finished' ? (
        <Game
          setEnd={setEnd}
          score={score}
          setScore={setScore}
          questions={state.questions}
          dispatch={dispatch}
        >
          <Timer
            dispatch={dispatch}
            secondRemaining={state.secondRemaining}
          ></Timer>
        </Game>
      ) : (
        <Congrates score={score}></Congrates>
      )}
    </div>
  );
}

export default App;

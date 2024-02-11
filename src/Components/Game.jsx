import { useEffect, useState } from 'react';
import Question from './Question';
import Progressbar from './ProgressBar';
import Button from './Button';

function Game({ setEnd, score, setScore, questions, children, dispatch }) {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isAnswered, setIanswered] = useState(false);
  const NumOFQuestion = questions.length;
  return (
    <>
      <div className="flex items-center justify-center w-screen m-auto ">
        <Progressbar progress={(questionNumber * 100) / 5} />
      </div>

      <div className="flex items-center justify-center p-[3%] ">
        <p className=" text-pretty text-xl text-white m-auto">
          Question {questionNumber}/{NumOFQuestion}
        </p>
        <p className=" text-pretty text-xl text-white m-auto">
          {score}/{NumOFQuestion} Points
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Question
          q={questions[questionNumber - 1]}
          setScore={setScore}
          key={questions[questionNumber - 1].question}
          isAnswered={isAnswered}
          setIanswered={setIanswered}
        ></Question>
      </div>
      <div className="flex items-center  justify-evenly w-screen m-auto mt-2">
        <Button
          content={'Restart'}
          onClick={() => {
            setScore(0);
            setQuestionNumber(1);
            setIanswered(false);
            dispatch({ type: 'restart' });
          }}
        />
        {children}
        {NumOFQuestion > questionNumber ? (
          <Button
            content={'Next'}
            onClick={() => {
              if (isAnswered) {
                setIanswered(false);
                setQuestionNumber((prev) => prev + 1);
              }
            }}
          />
        ) : (
          <Button content={'Finnish'} onClick={() => setEnd(true)} />
        )}
      </div>
    </>
  );
}

export default Game;

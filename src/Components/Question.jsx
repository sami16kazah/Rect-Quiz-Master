import QuestionButton from './QuestionButton';

function Question({ q, setScore, isAnswered, setIanswered }) {
  const { question, ans1, ans2, ans3, ans4, correct } = q;

  const ChooseAnswer = (correct) => {
    setIanswered(true);
    if (correct && !isAnswered) setScore((prev) => prev + 1);
  };

  return (
    <div className="overscroll-none">
      <p className=" text-pretty  text-5xl text-white text-center">
        {question}
      </p>
      <div className="flex flex-col items-start justify-center mt-5 gap-2 w-screen   ">
        <QuestionButton
          content={ans1}
          correct={correct === ans1}
          ChooseAnswer={ChooseAnswer}
          isAnswered={isAnswered}
          key={ans1}
        ></QuestionButton>
        <QuestionButton
          content={ans2}
          correct={correct === ans2}
          ChooseAnswer={ChooseAnswer}
          isAnswered={isAnswered}
          key={ans2}
        ></QuestionButton>
        <QuestionButton
          content={ans3}
          correct={correct === ans3}
          ChooseAnswer={ChooseAnswer}
          isAnswered={isAnswered}
          key={ans3}
        ></QuestionButton>
        <QuestionButton
          content={ans4}
          correct={correct === ans4}
          ChooseAnswer={ChooseAnswer}
          isAnswered={isAnswered}
          key={ans4}
        ></QuestionButton>
      </div>
    </div>
  );
}

export default Question;

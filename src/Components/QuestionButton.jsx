function QuestionButton({ content, ChooseAnswer, correct, isAnswered }) {
  return (
    <button
      onClick={() => ChooseAnswer(correct)}
      className={` ${
        isAnswered && correct
          ? 'bg-blue-500 text-black'
          : isAnswered && !correct
          ? 'bg-orange-500 text-black'
          : 'bg-gray-700 text-white'
      }   p-4  w-1/2  text-start m-auto rounded-full ${
        !isAnswered
          ? 'hover:bg-gray-600 hover:my-1 hover:shadow-2xl shadow-black'
          : 'hover:my-1 hover:shadow-2xl shadow-black'
      }  `}
    >
      {content}
    </button>
  );
}

export default QuestionButton;

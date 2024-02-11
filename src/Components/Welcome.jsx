import Button from './Button';

function Welcome({ setStart }) {
  return (
    <div className="p-[15%]">
      <p className=" text-pretty  text-5xl text-white text-center">
        Welcome to The React Quiz
      </p>
      <p className=" text-pretty  text-2xl text-white text-center">
        15 questions to test your React mastery
      </p>
      <div className="flex items-center justify-center mt-5">
        <Button
          onClick={() => {
            setStart((prev) => !prev);
          }}
          content={"Let's Start !"}
        ></Button>
      </div>
    </div>
  );
}

export default Welcome;

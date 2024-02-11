function Congrates({ score }) {
  return (
    <div className="">
      <p className="text-pretty  text-5xl text-white text-center p-[5%]">
        Congrates You Finished The Quiz !
      </p>
      <p className="text-pretty  text-5xl text-white text-center p-[5%]">
        Your Score is {score}
      </p>
    </div>
  );
}

export default Congrates;

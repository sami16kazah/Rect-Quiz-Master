function Button({ content, onClick }) {
  return (
    <button
      onClick={onClick}
      className=" bg-gray-700 p-4  w-32 text-white rounded-full hover:bg-gray-600 hover:shadow-2xl shadow-black"
    >
      {content}
    </button>
  );
}

export default Button;

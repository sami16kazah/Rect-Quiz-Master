// Filename - Progress_bar.js

import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="bg-white rounded-full w-1/2 mt-2">
      <div
        className={`h-full  bg-blue-300 rounded-lg text-right`}
        style={{ width: `${progress}%` }}
      >
        <span className="p-2 font-black "></span>
      </div>
    </div>
  );
};

export default ProgressBar;

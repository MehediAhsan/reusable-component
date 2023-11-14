import React from 'react';

const FormFour = () => {
    return (
        <div className="flex flex-col my-20 gap-4 justify-center items-center">
              <h1 className="text-center text-4xl text-blue-500 font-bold">Congratulations!</h1>
              <p className="text-gray-700 text-center">Your Form has been submitted successfully</p>
              <button
                type="button"
                className="px-3 py-2 text-lg rounded-md text-white bg-blue-500"
              >
                Go Home
              </button>
            </div>
    );
};

export default FormFour;
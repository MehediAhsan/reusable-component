import React from 'react';
import InputField from '../InputField';

const FormTwo = ({state, inputHandle, register, errors, next, pre}) => {
    return (
        <div>
            <InputField
              register={register}
              label="Varsity"
              name="varsity"
              id="varsity"
              type="text"
              value={state.varsity}
              onChange={inputHandle}
              error={errors}
            />
            <InputField
              register={register}
              label="Session"
              name="session"
              id="session"
              type="text"
              value={state.session}
              onChange={inputHandle}
              error={errors}
            />
            <InputField
              register={register}
              label="Address"
              name="address"
              id="address"
              type="text"
              value={state.address}
              onChange={inputHandle}
              error={errors}
            />
            <div className="mt-4 gap-3 flex justify-center items-center">
              <button
                type="button"
                onClick={pre}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={next}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
              >
                Next
              </button>
            </div>
          </div>
    );
};

export default FormTwo;
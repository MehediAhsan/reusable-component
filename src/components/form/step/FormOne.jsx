import React from 'react';
import InputField from '../InputField';

const FormOne = ({ state, inputHandle, register, errors, next, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    next();
  }
  return (
    <>
      <InputField
        register={register}
        label="Name"
        name="name"
        id="name"
        type="text"
        value={state.name}
        onChange={inputHandle}
        error={errors}
      />
      <InputField
        register={register}
        label="Dept"
        name="dept"
        id="dept"
        type="text"
        value={state.dept}
        onChange={inputHandle}
        error={errors}
      />
      <InputField
        register={register}
        label="Batch"
        name="batch"
        id="batch"
        type="number"
        value={state.batch}
        onChange={inputHandle}
        error={errors}
      />
      <div className="mt-4 flex justify-center items-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default FormOne;
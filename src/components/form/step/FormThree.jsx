import React from 'react';
import InputField from '../InputField';

const FormThree = ({ state, inputHandle, register, errors, next, pre, formState, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    next();
  }
  return (
    <div>
      <InputField
        register={register}
        label="District"
        name="district"
        id="district"
        type="text"
        value={state.district}
        onChange={inputHandle}
        error={errors}
      />
      <InputField
        register={register}
        label="Thana"
        name="thana"
        id="thana"
        type="text"
        value={state.thana}
        onChange={inputHandle}
        error={errors}
      />
      <InputField
        register={register}
        label="Post"
        name="post"
        id="post"
        type="text"
        value={state.post}
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
          type="submit"
          onClick={handleSubmit}
          className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
          disabled={formState.isSubmitting}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormThree;
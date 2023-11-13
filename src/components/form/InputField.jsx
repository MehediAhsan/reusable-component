// InputField.js
import React from 'react';

const InputField = ({ label, name, type, value, onChange, error, register, id }) => {
  // console.log(error);
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={name}>{label}</label>
      <input
      {...register(name)}
        value={value}
        onChange={onChange}
        className={`p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md ${
          error ? 'border-red-500' : ''
        }`}
        type={type}
        name={name}
        id={id}
        placeholder={label.toLowerCase()}
      />
      {error && <span className="text-red-500">{error?.name?.message}</span>}
    </div>
  );
};

export default InputField;

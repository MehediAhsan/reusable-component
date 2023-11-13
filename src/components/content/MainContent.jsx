// MainContent.js
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../form/InputField';
import { useState } from 'react';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  dept: Yup.string().required('Dept is required'),
  batch: Yup.number().required('Batch is required'),
  varsity: Yup.string().required('Varsity is required'),
  session: Yup.string().required('Session is required'),
  address: Yup.string().required('Address is required'),
  district: Yup.string().required('District is required'),
  thana: Yup.string().required('Thana is required'),
  post: Yup.string().required('Post is required'),
});

function MainContent() {
  const { register, handleSubmit, formState, setValue, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    name: '',
    dept: '',
    batch: '',
    varsity: '',
    session: '',
    address: '',
    district: '',
    thana: '',
    post: ''
  })
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const next = () => {
    if (formNo === 1 && state.name && state.dept && state.batch) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && state.varsity && state.session && state.address) {
      setFormNo(formNo + 1)
    } else {
      // toast.error('Please fillup all input field')
    }
  }
  const pre = () => {
    setFormNo(formNo - 1)
  }
  const finalSubmit = () => {
    console.log(state);
  }

  return (
    <div className="w-full h-full p-10 md:p-20 flex justify-center items-center overflow-hidden">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-1/2 rounded-md shadow-md bg-white p-5"
      >
        {/* ... Other code ... */}
        <div className='flex justify-center items-center'>
          {
            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
              {v}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
              }
            </>)
          }
        </div>
        {formNo === 1 && (
          <div>
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
                type="button"
                onClick={next}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* ... Other code ... */}
        {formNo === 2 && (
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
)}

{formNo === 3 && (
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
        className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
        disabled={formState.isSubmitting}
      >
        Submit
      </button>
    </div>
  </div>
)}
      </form>
    </div>
  );
}

export default MainContent;

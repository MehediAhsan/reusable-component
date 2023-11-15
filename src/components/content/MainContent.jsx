// MainContent.js
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../form/InputField";
import { useState } from "react";
import FormOne from "../form/step/FormOne";
import FormTwo from "../form/step/FormTwo";
import FormThree from "../form/step/FormThree";
import FormFour from "../form/step/FormFour";
import StepDesign from "../form/step/StepDesign";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  dept: Yup.string().required("Dept is required"),
  batch: Yup.number().required("Batch is required"),
  varsity: Yup.string().required("Varsity is required"),
  session: Yup.string().required("Session is required"),
  address: Yup.string().required("Address is required"),
  district: Yup.string().required("District is required"),
  thana: Yup.string().required("Thana is required"),
  post: Yup.string().required("Post is required"),
});

function MainContent() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    formState,
    unregister,
    setValue
  } = useForm(
    {
      mode: "all",
      resolver: yupResolver(schema)
    });

  const onSubmit = (data) => {
    console.log(data);
  };

  const formArray = [1, 2, 3, 4];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    name: "",
    dept: "",
    batch: "",
    varsity: "",
    session: "",
    address: "",
    district: "",
    thana: "",
    post: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const next = () => {
    if (formNo === 1 && state.name && state.dept && state.batch) {
      setFormNo(formNo + 1);
    } else if (
      formNo === 2 &&
      state.varsity &&
      state.session &&
      state.address
    ) {
      setFormNo(formNo + 1);
    }
    else if (
      formNo === 3 &&
      state.district &&
      state.thana &&
      state.post
    ) {
      setFormNo(formNo + 1);
    } else {
      // toast.error('Please fillup all input field')
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };

  // console.log(state)

  return (
    <div className="w-full h-full p-10 md:p-20 flex justify-center items-center overflow-hidden">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-1/2 rounded-md shadow-md bg-white p-5"
      >
        {/* ... Other code ... */}
        <StepDesign formArray={formArray} formNo={formNo}></StepDesign>

        {formNo === 1 && (
          <FormOne state={state} inputHandle={inputHandle} register={register} errors={errors} next={next}
            onSubmit={handleSubmit(onSubmit)}
          ></FormOne>
        )}
        {/* ... Other code ... */}
        {formNo === 2 && (
          <FormTwo state={state} inputHandle={inputHandle} register={register} errors={errors} next={next} pre={pre} unregister={unregister} onSubmit={handleSubmit(onSubmit)} setValue={setValue}></FormTwo>
        )}

        {formNo === 3 && (
          <FormThree state={state} inputHandle={inputHandle} register={register} errors={errors} next={next} pre={pre} onSubmit={handleSubmit(onSubmit)} formState={formState} ></FormThree>
        )}
        {
          formNo === 4 && (
            <FormFour></FormFour>
          )
        }
        <pre className="text-black hidden">{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    </div>
  );
}

export default MainContent;

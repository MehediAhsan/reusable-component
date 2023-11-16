import { useState } from "react";
import { baseurl } from "../config/baseURL";
import axiosAuthInstance from "../helpers/axiosInstance/axiosAuthInstance";

const useAxios = (initialValue = {}) => {
  const [apiResponse, setApiResponse] = useState({
    isLoading: false,
    responseData: initialValue,
    apiError: null,
  });
  const { isLoading, responseData, apiError } = apiResponse;

  const handleReset = () =>
    setApiResponse({
      isLoading: false,
      apiError: null,
      responseData: initialValue,
    });

  const apiFetcher = async ({ options, callback }) => {
    setApiResponse((prev) => {
      return { ...prev, isLoading: true, apiError: null, responseData: null };
    });
    axiosAuthInstance({
      ...options,
      url: baseurl + options.url,
    })
      .then(({ data }) => {
        if (data) {
          setApiResponse((prev) => {
            return { ...prev, isLoading: false, responseData: data };
          });
          if (typeof callback === "function") {
            return callback(data);
          }
        }
        return null;
      })
      .catch((error) => {
        setApiResponse((prev) => {
          return {
            ...prev,
            isLoading: false,
            apiError:
              error?.data && error?.data?.message
                ? error?.data?.message
                : error.message,
          };
        });
      });
  };
  return { isLoading, responseData, apiError, apiFetcher, handleReset };
};

export default useAxios;
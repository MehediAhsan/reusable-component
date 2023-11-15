// ImageUpload.js
import React, { useState, useEffect } from "react";
import { render } from "react-dom";

const ImageUpload = ({ name, label, register, setValue, unregister, required, id }) => {
  const [previewImage, setPreviewImage] = useState(null);
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
          console.log(reader.result)
        setPreviewImage(reader.result);
        setValue(name, reader.result); // Set base64 data to form field
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setPreviewImage(null);
    setValue(name, ""); // Clear the form field
  };

  useEffect(() => {
    register(name, { required }); // Register the input field
    return () => {
      unregister(name); // Unregister the input field when component unmounts
    };
  }, [name, register, unregister, required]);

  return (
    <div>
      <label>{label}</label>
      <input
      {...register(name)}
        type="file"
        accept="image/*"
        id={id}
        name={name}
        onChange={handleImageChange}
      />
      {previewImage && (
        <div>
          <img src={previewImage} alt="Preview" style={{ maxWidth: "100px", maxHeight: "100px" }} />
          <button type="button" onClick={removeImage}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
